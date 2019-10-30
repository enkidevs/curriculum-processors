const visit = require('unist-util-visit');

module.exports = function questionHeadline() {
  return transform;

  function transform(ast) {
    visit(ast, isHeadline, createHeadline);
    return ast;
  }

  function isHeadline(node, index, parent) {
    return (
      node.type === 'heading' &&
      node.depth === 3 &&
      (parent.type === 'root' || (parent.type === 'section' && parent.question))
    );
  }

  function createHeadline(node, index, parent) {
    parent.children[index] = {
      type: 'questionHeadline',
      children: node.children,
    };
  }
};
