const unified = require('unified')
const map = require('unist-util-map')
const u = require('unist-builder')
const markdown = require('../markdown')
const questionGap = require('./question-gap')

module.exports = function questionCode() {
  return transform

  function transform(ast) {
    return map(ast, parseCode)
  }

  function parseCode(node) {
    if (node.type === 'code' && node.value.includes('???')) {
      const lines = node.value.split('\n').map(line =>
        u(
          'line',
          undefined,
          line
            .split(/(\?{3})/)
            .map(
              chunk =>
                chunk === '???'
                  ? u('questionGap', undefined, '???')
                  : u('text', undefined, chunk)
            )
            .filter(node => Boolean(node.value)) // eliminate empty string nodes
            .reduce((lineChildren, curr, i) => {
              const prev = lineChildren[i - 1]
              if (prev && prev.type === 'text' && prev.type === curr.type) {
                prev.value += curr.value
              } else {
                lineChildren.push(curr)
              }
              return lineChildren
            }, [])
        )
      )
      return Object.assign({}, node, {
        question: true,
        lines
      })
    }
    return node
  }
}
