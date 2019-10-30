const {
  compileNodeToQuestionMarkdown,
  getAnswersFromNode,
  compileNodeToMarkdown,
} = require('./helpers');

module.exports = function quiz(section) {
  if (!section.question) {
    throw new Error(`Invalid question section ${section.name}`);
  }
  const rawText = compileNodeToQuestionMarkdown(section);

  const headline = compileNodeToMarkdown(
    section.children.find(child => child.type === 'questionHeadline')
  )
    .split('\n')
    .join('');

  const answers = getAnswersFromNode(section);

  const question = compileNodeToQuestionMarkdown({
    children: section.children.filter(
      child =>
        child.type !== 'questionHeadline' &&
        child.type !== 'list' &&
        !child.answers
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
