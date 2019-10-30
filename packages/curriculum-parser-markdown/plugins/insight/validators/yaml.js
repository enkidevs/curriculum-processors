const visit = require('unist-util-visit');

module.exports = function validateYaml() {
  return transform;

  function transform(ast) {
    let yamlNodeCount = 0;

    visit(ast, 'yaml', () => {
      yamlNodeCount += 1;
    });

    if (yamlNodeCount !== 1) {
      throw new Error(
        `Must have exactly 1 yaml configuration but found ${yamlNodeCount} instead.`
      );
    }

    return ast;
  }
};
