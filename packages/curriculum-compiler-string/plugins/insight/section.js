const unified = require('unified')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const markdown = require('../markdown')
const question = require('../question')

module.exports = function section() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.section = function(node) {
        const thematicBreak = {
          type: 'thematicBreak',
        }
        const heading = {
          type: 'heading',
          depth: 2,
          children: [
            {
              type: 'text',
              value: node.name,
            },
          ],
        }
        return unified()
          .use([...markdown, ...question])
          .stringify({
            type: 'root',
            children: [thematicBreak, heading, ...node.children],
          })
      }
    }
  }
}
