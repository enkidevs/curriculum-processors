const unified = require('unified')
const map = require('unist-util-map')
const markdown = require('../markdown')
const questionGap = require('./question-gap')

module.exports = function questionCode () {
  return transform

  function transform (ast) {
    return map(ast, parseCode)
  }

  function parseCode (node) {
    if (node.type === 'code' && node.value.includes('???')) {
      const processor = unified()
        .use(markdown)
        .use(questionGap)
      const ast = processor.runSync(processor.parse(node.value))
      return {
        ...node,
        question: true,
        children: ast.children
      }
    }
    return node
  }
}
