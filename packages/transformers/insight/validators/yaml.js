const visit = require('unist-util-visit')

module.exports = function yaml () {
  let yamlNodeCount = 0

  return transform

  function transform (ast) {
    visit(ast, 'yaml', validateYaml)
    if (yamlNodeCount !== 1) {
      throw new Error(
        `Must have exactly 1 yaml configuration but found ${yamlNodeCount} instead.`
      )
    }
  }

  function validateYaml (node) {
    yamlNodeCount += 1
  }
}
