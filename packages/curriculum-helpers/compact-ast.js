const assertNode = require('unist-util-assert')
const map = require('unist-util-map')

module.exports = function compactAst(ast) {
  return map(ast, ({ position, ...rest }) => rest)
}
