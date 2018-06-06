const unified = require('unified')
const markdown = require('../markdown')

module.exports = function questionHeadline() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.questionHeadline = function(questionHeadline) {
        const content = unified()
          .use(markdown)
          .stringify({
            type: 'root',
            children: questionHeadline.children,
          })
        return `### ${content}`
      }
    }
  }
}
