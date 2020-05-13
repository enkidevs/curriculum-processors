const visit = require('unist-util-visit');
const { sectionNames } = require('@enkidevs/curriculum-helpers');
const UrlParse = require('url-parse');

const INTERNAL_LINKS_CONTEXT = ['glossary', 'content'];

module.exports = function enkiLink() {
  return transform;

  function transform(ast) {
    const content = ast.children.find(
      (node) =>
        node.type &&
        node.type === 'section' &&
        node.name === sectionNames.CONTENT
    );
    visit(content, 'link', parseEnkiLink);
    return ast;
  }

  function parseEnkiLink(node) {
    /**
     * ## glossary
     * [Object-Oriented Programming](https://enki.com/INTERNAL_LINKS_CONTEXT/path/to/entry/oop)
     * OR
     * [Object-Oriented Programming](enki.com/INTERNAL_LINKS_CONTEXT/path/to/entry/oop)
     */
    const indexOfEnki = node.url.indexOf('enki.com'); // hardcoded url for now
    if (indexOfEnki > -1) {
      const toParse = `https://${node.url.substring(indexOfEnki)}`;
      const { pathname, origin } = new UrlParse(toParse);
      const [context, ...path] = pathname.split('/').filter(Boolean);
      if (INTERNAL_LINKS_CONTEXT.includes(context)) {
        Object.assign(node, {
          isInternal: true,
          context,
          path,
          origin,
        });
      }
    }
  }
};
