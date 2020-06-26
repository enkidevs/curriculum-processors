const unified = require('unified');
const markdown = require('../markdown');

module.exports = function headline() {
  const { Compiler } = this;

  if (Compiler) {
    const { visitors } = Compiler.prototype;
    if (visitors) {
      visitors.headline = function visitHeadline(h) {
        const content = unified()
          .use(markdown)
          .stringify({
            type: 'root',
            children: h.children,
          })
          .replace(/\n{2,}/g, ' ')
          .replace(/ {2,}/g, ' ');
        return `# ${content}`;
      };
    }
  }
};
