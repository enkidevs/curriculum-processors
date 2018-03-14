const map = require('unist-util-map')

module.exports = function headline () {
  return transform

  function transform (ast) {
    return map(ast, parseHeadline)
  }

  function parseHeadline (node) {
    if (node.type === 'heading' && node.depth === 1) {
      return {
        type: 'headline',
        value: node.children[0].value
      }
    }
    return node
  }
}
