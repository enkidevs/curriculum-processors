const unified = require('unified');
const markdown = require('../markdown');

module.exports = function questionHeadline() {
  const { Compiler } = this;

  if (Compiler) {
    const { visitors } = Compiler.prototype;
    if (visitors) {
      visitors.questionHeadline = function visitQuestionHeadline(qh) {
        const content = unified()
          .use(markdown)
          .stringify({
            type: 'root',
            children: qh.children,
          });
        return `### ${content}`;
      };
    }
  }
};
