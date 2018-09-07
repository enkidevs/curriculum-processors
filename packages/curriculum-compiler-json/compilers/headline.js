const { compileNodeToInsightMarkdown } = require('./helpers');

module.exports = function headline(node) {
  return {
    headline: compileNodeToInsightMarkdown(node)
      .split('\n')
      .join(''),
  };
};
