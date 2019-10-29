const visit = require('unist-util-visit');
const decode = require('decode-uri-component');

module.exports = function image() {
  return transform;

  function transform(ast) {
    visit(ast, 'image', parseImage);
    return ast;
  }

  function parseImage(node) {
    const decodedUrl = decode(node.url);
    if (decodedUrl.startsWith('<svg')) {
      Object.assign(node, {
        svg: true,
      });
    }
  }
};
