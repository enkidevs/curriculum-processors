const visit = require('unist-util-visit')

module.exports = function headline () {
  let headlineNodeCount = 0

  return transform

  function transform (ast) {
    visit(ast, 'headline', validateHeadline)
    if (headlineNodeCount !== 1) {
      throw new Error(
        `Must have exactly 1 headline but found ${headlineNodeCount} instead.`
      )
    }
  }

  function validateHeadline (node) {
    headlineNodeCount += 1
  }
}
