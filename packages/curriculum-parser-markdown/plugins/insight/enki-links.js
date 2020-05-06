const visit = require('unist-util-visit');
const URL = require('url-parse');

module.exports = function enkiLink() {
  return transform;

  function transform(ast) {
    visit(ast, 'link', parseEnkiLink);
    return ast;
  }

  function parseEnkiLink(node) {
    /**
     * protocol: enki-context:
     * host: slug-1.slug-2.slug-3.etc
     *
     * notice ':' after 'context'
     * 'context' should, ideally, be __camelCase__
     */
    const { protocol, host } = new URL(node.url);
    const [enki, context] = protocol.slice(0, -1).split('-');
    if (enki === 'enki') {
      Object.assign(node, {
        isInternal: true,
        context,
        path: host.split('.'),
      });
    }
  }
};
