const unified = require('unified')
const markdown = require('../markdown')

module.exports = function headline() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.headline = function(headline) {
        const content = unified()
          .use(markdown)
          .stringify({
            type: 'root',
            children: headline.children,
          })
        return `# ${content}`
      }
    }
  }
}
