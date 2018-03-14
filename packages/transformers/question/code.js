const unified = require('unified')
const map = require('unist-util-map')
const base = require('../base')
const questionGap = require('./question-gap')

module.exports = function questionCode () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.code = function (node) {
        return `\`\`\`${node.lang}\n${node.value}\n\`\`\``
      }
    }
  }

  return transform

  function transform (ast) {
    return map(ast, parseCode)
  }

  function parseCode (node) {
    if (node.type === 'code' && node.value.includes('???')) {
      const processor = unified()
        .use(base)
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
