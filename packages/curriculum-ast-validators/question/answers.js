const visit = require('unist-util-visit');

module.exports = function validateQuestionAnswers(ast) {
  visit(ast, isQuestionSection, validate);

  function isQuestionSection(node) {
    return (
      (node.type === 'section' && node.question) ||
      (node.type === 'root' && node.children.some(child => child.answers))
    );
  }

  function validate(section) {
    const answers = section.children.find(
      child => child.type === 'list' && child.answers
    );

    if (!answers) {
      throw new Error(
        `Missing question answers${
          section.name ? ` for the "${section.name}" section` : ''
        }.`
      );
    }

    const sectionChildrenWithoutAnswers = section.children.filter(
      child => child !== answers
    );

    let questionGapCount = 0;

    visit(
      {
        ...section,
        children: sectionChildrenWithoutAnswers,
      },
      'questionGap',
      () => {
        questionGapCount += 1;
      }
    );

    const correctAnswersCount = answers.children.filter(
      listItem => listItem.correct
    ).length;

    if (questionGapCount !== correctAnswersCount) {
      throw new Error(
        `Missing answers for${
          section.name ? ` ${section.name}` : ''
        } question. There are ${
          questionGapCount > correctAnswersCount ? 'more' : 'less'
        } question gaps (${questionGapCount}) than correct answers (${correctAnswersCount})`
      );
    }
  }
};
