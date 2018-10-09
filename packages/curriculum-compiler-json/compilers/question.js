const {
  compileNodeToQuestionMarkdown,
  getAnswersFromNode,
} = require('./helpers');

module.exports = function question(node, type) {
  if (!node.question) {
    throw new Error(`Invalid question section ${node.name}`);
  }
  const rawText = compileNodeToQuestionMarkdown(node);
  const answers = getAnswersFromNode(node);
  const q = compileNodeToQuestionMarkdown({
    children: node.children.filter(
      child =>
        child.type !== 'heading' && child.type !== 'list' && !child.answers
    ),
  });

  return {
    [type]: {
      rawText,
      question: q,
      answers,
    },
  };
};
