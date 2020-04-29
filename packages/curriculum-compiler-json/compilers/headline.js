const { compileNodeToMarkdown } = require('./helpers');

module.exports = function headline(node) {
  return {
    headline: {
      rawText: compileNodeToMarkdown(node).split('\n').join(''),
    },
  };
};
