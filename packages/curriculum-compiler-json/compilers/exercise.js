const { compileNodeToQuestionMarkdown } = require('./helpers');

module.exports = function exercise(node) {
  const rawText = compileNodeToQuestionMarkdown(node);
  const question = compileNodeToQuestionMarkdown({
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
