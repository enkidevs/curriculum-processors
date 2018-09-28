const { compileNodeToInsightMarkdown } = require('./helpers');

module.exports = function exercise(node) {
  const rawText = compileNodeToInsightMarkdown(node);
  const question = compileNodeToInsightMarkdown({
    children: node.children.filter(
      child => child.type !== 'questionHeadline' && !child.answers
    ),
  });

  return {
    exercise: {
      rawText,
      question,
    },
  };
};
