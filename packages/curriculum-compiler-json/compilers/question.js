const {
  compileNodeToQuestionMarkdown,
  getAnswersFromNode,
} = require('./helpers');

module.exports = function question(section, type) {
  if (!section.question) {
    throw new Error(`Invalid question section ${section.name}`);
  }
  const rawText = compileNodeToQuestionMarkdown(section);
  const answers = getAnswersFromNode(section);
  const q = compileNodeToQuestionMarkdown({
    children: section.children.filter(
      (child) => child.type !== 'list' && !child.answers
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
