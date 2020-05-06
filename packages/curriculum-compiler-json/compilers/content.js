const { compileNodeToMarkdown } = require('./helpers');

module.exports = function content(node) {
  const rawText = compileNodeToMarkdown(node);
  return {
    content: {
      rawText,
    },
  };
};
