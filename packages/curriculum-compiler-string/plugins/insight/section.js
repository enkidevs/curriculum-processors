const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getCompiler } = require('../index')

module.exports = function section () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.section = function (node) {
        const thematicBreak = {
          type: 'thematicBreak'
        }
        const heading = {
          type: 'heading',
          depth: 2,
          children: [
            {
              type: 'text',
              value: node.name
            }
          ]
        }
        const compiler = getCompiler(contentTypes.INSIGHT)
        return compiler.compileSync({
          type: 'root',
          children: [thematicBreak, heading, ...node.children]
        })
      }
    }
  }
}
