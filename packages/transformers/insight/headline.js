const map = require('unist-util-map')

module.exports = function headline () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.headline = function (headline) {
        return `# ${headline.value}`
      }
    }
  }

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
