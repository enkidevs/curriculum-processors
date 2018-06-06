const assertNode = require('unist-util-assert')
const map = require('unist-util-map')

module.exports = function compactAst(ast) {
  return map(ast, node =>
    Object.keys(node)
      .filter(key => key !== 'position')
      .reduce((n, key) => {
        n[key] = node[key]
        return n
      }, {})
  )
}
