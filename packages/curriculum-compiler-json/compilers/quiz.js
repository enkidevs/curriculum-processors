const {
  compileNodeToQuestionMarkdown,
  getAnswersFromNode,
  compileNodeToMarkdown,
} = require('./helpers');

module.exports = function quiz(node) {
  const rawText = compileNodeToQuestionMarkdown(node);
  const headline = compileNodeToMarkdown(
    node.children.find(child => child.type === 'questionHeadline')
  )
    .split('\n')
    .join('');
  const answers = getAnswersFromNode(node);

  const question = compileNodeToQuestionMarkdown({
    children: node.children.filter(
      child => child.type !== 'questionHeadline' && !child.answers
    ),
  });

  return {
    quiz: {
      rawText,
      headline,
      question,
      answers,
    },
  };
};
