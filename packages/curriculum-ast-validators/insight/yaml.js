const visit = require('unist-util-visit');
const jsYaml = require('js-yaml');
const { insightCategories } = require('@enkidevs/curriculum-helpers');

module.exports = function validateYaml(ast) {
  let yamlNodeCount = 0;
  let yamlNode;

  visit(ast, 'yaml', (node) => {
    yamlNodeCount += 1;
    yamlNode = node;
  });

  if (yamlNodeCount !== 1) {
    throw new Error(
      `Must have exactly 1 yaml configuration but found ${yamlNodeCount} instead`
    );
  }

  const parsedValue = jsYaml.safeLoad(yamlNode.value, 'utf8');

  if (!insightCategories.includes(parsedValue.category)) {
    throw new Error(
      `Invalid insight category "${
        parsedValue.category || ''
      }". Must be one of "${insightCategories.join('", "')}"`
    );
  }
};
