const map = require('unist-util-map')

module.exports = function questionHeadline () {
  return transform

  function transform (ast) {
    return map(ast, parseHeadline)
  }

  function parseHeadline (node) {
    if (node.type === 'heading' && node.depth === 3) {
      return {
        type: 'questionHeadline',
        children: node.children
      }
    }
    return node
  }
}
