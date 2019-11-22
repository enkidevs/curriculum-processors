const visit = require('unist-util-visit');

module.exports = function validateHeadline(ast) {
  let headlineNodeCount = 0;

  visit(ast, 'headline', () => {
    headlineNodeCount += 1;
  });

  if (headlineNodeCount !== 1) {
    throw new Error(
      `Must have exactly 1 headline but found ${headlineNodeCount} instead`
    );
  }
};
