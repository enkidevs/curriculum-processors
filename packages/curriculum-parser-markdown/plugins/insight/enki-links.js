const visit = require('unist-util-visit');
const { sectionNames, internalLinks } = require('@enkidevs/curriculum-helpers');
const UrlParse = require('url-parse');

const { CONTEXTS } = internalLinks;

module.exports = function enkiLink() {
  return transform;

  function transform(ast) {
    const content = ast.children.find(
      (node) => node.type === 'section' && node.name === sectionNames.CONTENT
    );

    if (content) {
      visit(content, 'link', parseEnkiLink);
    }

    return ast;
  }

  function parseEnkiLink(node) {
    /**
     * ## glossary
     * [Object-Oriented Programming](https://enki.com/INTERNAL_LINKS_CONTEXT/path/to/entry/oop)
     * OR
     * [Object-Oriented Programming](enki.com/INTERNAL_LINKS_CONTEXT/path/to/entry/oop)
     */
    const ENKI_ROOT = 'enki.com'; // hardcoded for now
    const indexOfEnki = node.url.indexOf(ENKI_ROOT);
    if (indexOfEnki > -1) {
      const toParse = `https://${node.url.substring(indexOfEnki)}`;
      const { pathname, host } = new UrlParse(toParse);
      const { context, path } = getContextAndPath(pathname);
      if (CONTEXTS.includes(context)) {
        Object.assign(node, {
          isInternal: true,
          context,
          path,
          host,
        });
      }
    }
  }

  function getContextAndPath(pathname) {
    const [context, ...path] = pathname.split('/').filter(Boolean);
    return {
      context,
      path: path.join('/'),
    };
  }
};
