const visit = require('unist-util-visit');

module.exports = function questionAnswers() {
  return transform;

  function transform(ast) {
    visit(ast, isQuestionAnswers, parseQuestionAnswers);
    return ast;
  }

  function isQuestionAnswers(node, index, parent) {
    return (
      node.type === 'list' &&
      !node.ordered &&
      index === parent.children.length - 1 &&
      (parent.type === 'root' || (parent.type === 'section' && parent.question))
    );
  }

  function parseQuestionAnswers(node, index, parent) {
    let expectedAnswersCount = 0;
    visit(parent, 'questionGap', () => {
      expectedAnswersCount += 1;
    });

    node.answers = true;
    node.children = node.children.map((child, i) => ({
      ...child,
      correct: i <= expectedAnswersCount - 1,
    }));
  }
};
