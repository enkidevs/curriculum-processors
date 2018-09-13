const { compileNodeToMarkdown } = require('./helpers');

module.exports = function headline(node) {
  return {
    headline: compileNodeToMarkdown(node)
      .split('\n')
      .join(''),
  };
};
