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

function getMarkdownLink(link) {
  let result;
  if (mdUrlRegExWithType.test(link)) {
    result = mdUrlRegExWithType.exec(link);
    return { name: result[1], url: result[2], nature: result[3] };
  }
  if (mdUrlRegEx.test(link)) {
    result = mdUrlRegEx.exec(link);
    return { name: result[1], url: result[2], nature: 'website' };
  }
  return {
    nature: 'website',
    name: getDomainFromURL(link),
    url: link,
  };
}

// http://stackoverflow.com/questions/8498592/extract-root-domain-name-from-string
function getDomainFromURL(url) {
  if (url) {
    let domain;
    // find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf('://') > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/');
    }

    // find & remove port number
    domain = domain.split(':');

    return domain;
  }
  return null;
}
