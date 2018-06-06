const map = require('unist-util-map')

module.exports = function questionHeadline() {
  return transform

  function transform(ast) {
    return map(ast, parseHeadline)
  }

  function parseHeadline(node, index, parent) {
    if (
      node.type === 'heading' &&
      node.depth === 3 &&
      (parent.type === 'root' || (parent.type === 'section' && parent.question))
    ) {
      return {
        type: 'questionHeadline',
        children: node.children,
      }
    }
    return node
  }
}
