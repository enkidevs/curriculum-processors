const visit = require('unist-util-visit');
const jsYaml = require('js-yaml');

module.exports = function yaml() {
  return transform;

  function transform(ast) {
    visit(ast, 'yaml', parseYaml);
    return ast;
  }

  function parseYaml(node) {
    const parsedValue = jsYaml.safeLoad(node.value, 'utf8');
    const newNode = {
      ...node,
      data: {
        parsedValue,
      },
    };

    const { links } = parsedValue;
    if (Array.isArray(links)) {
      newNode.data.parsedValue.links = links.map(getMarkdownLink);
    }

    Object.assign(node, newNode);
  }
};

// https://github.com/chjj/marked/blob/master/lib/marked.js#L455 (slightly hacked with {type})
const mdUrlRegEx = /\[(.*)\]\((.*)\)/;
const mdUrlRegExWithType = /\[(.*)\]\((.*)\)\{(.*)\}/;

// accounts for any spaces or newlines inside the name, url, nature or outside
// this string:
// [Difference between Primary and Foreign
//   Keys]
//   (https://www.dotnettricks.com/learn/sqlserver/difference-between-primary-key-and-foreign-key){article}
// returns three groups
// match.groups = {
//   name: "Difference between Primary and Foreign  Keys", (the space is not a typo, we also handle that)
//   url: "https://www.dotnettricks.com/learn/sqlserver/difference-between-primary-key-and-foreign-key",
//   nature: "article"
// }
const yamlUrlRegExWithType = /\[(?<name>[^[\]]*)\]\s*\((?<url>[^()]*)\)\s*\{(?<nature>[^{}]*)\}/;

function getMarkdownLink(link) {
  if (yamlUrlRegExWithType.test(link)) {
    const match = yamlUrlRegExWithType.exec(link);
    const { name, url, nature } = match.groups;

    // remove any extra spaces before returning
    return {
      name: removeExtraSpaces(name),
      url: removeExtraSpaces(url),
      nature: removeExtraSpaces(nature),
    };
  }

  if (mdUrlRegExWithType.test(link)) {
    const [, name, url, nature] = mdUrlRegExWithType.exec(link);
    return { name, url, nature };
  }

  if (mdUrlRegEx.test(link)) {
    const [, name, url] = mdUrlRegEx.exec(link);
    return { name, url, nature: 'website' };
  }

  return {
    nature: 'website',
    name: getDomainFromURL(link),
    url: link,
  };
}

// http://stackoverflow.com/questions/8498592/extract-root-domain-name-from-string
function getDomainFromURL(url) {
  return url
    ? // find & remove protocol (http, ftp, etc.) and get domain
      (url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/'))
        // find & remove port number
        .split(':')
    : null;
}

function removeExtraSpaces(string) {
  return string.replace(/\s+/g, ' ').trim();
}
