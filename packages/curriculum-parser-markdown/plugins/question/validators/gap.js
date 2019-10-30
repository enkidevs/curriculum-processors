const visit = require('unist-util-visit');

module.exports = function validateQuestionGap() {
  return transform;

  function transform(ast) {
    visit(ast, isQuestionSection, validate);
    return ast;
  }

  function isQuestionSection(node) {
    return (
      (node.type === 'section' && node.question) ||
      (node.type === 'root' && node.children.some(child => child.answers))
    );
  }

  function validate(section) {
    let questionGapCount = 0;

    visit(section, 'questionGap', () => {
      questionGapCount += 1;
    });

    if (questionGapCount === 0) {
      throw new Error(
        `${section.name} question does not have any question gaps.`
      );
    }
  }
};
