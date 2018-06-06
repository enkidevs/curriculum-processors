const { compileNodeToInsightMarkdown } = require('./helpers')

module.exports = function(node) {
  return {
    headline: compileNodeToInsightMarkdown(node)
      .split('\n')
      .join(''),
  }
}
