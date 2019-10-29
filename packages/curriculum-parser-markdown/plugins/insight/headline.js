const visit = require('unist-util-visit');

module.exports = function headline() {
  return transform;

  function transform(ast) {
    visit(ast, isH1, parseHeadline);
    return ast;
  }

  function isH1(node) {
    return node.type === 'heading' && node.depth === 1;
  }

  function parseHeadline(node, index, parent) {
    parent.children[index] = {
      type: 'headline',
      children: node.children,
    };
  }
};
