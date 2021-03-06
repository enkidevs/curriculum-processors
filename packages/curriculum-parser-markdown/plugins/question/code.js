const visit = require('unist-util-visit');
const u = require('unist-builder');

module.exports = function questionCode() {
  return transform;

  function transform(ast) {
    visit(ast, isQuestionCode, parseQuestionCode);
    return ast;
  }

  function isQuestionCode(node) {
    return node.type === 'code' && node.value.includes('???');
  }

  function parseQuestionCode(node) {
    Object.assign(node, {
      type: 'questionCode',
      children: node.value.split('\n').map((line) =>
        u(
          'questionCodeLine',
          undefined,
          line
            .split(/(\?{3})/) // split using a group so we also capture ???
            .map((chunk) =>
              chunk === '???'
                ? u('questionGap', undefined, '???')
                : u('questionCodeSegment', { lang: node.lang }, chunk)
            )
            .filter((n) => Boolean(n.value)) // eliminate empty string nodes
            .reduce((lineChildren, curr, i) => {
              const prev = lineChildren[i - 1];
              if (prev && prev.type === 'text' && prev.type === curr.type) {
                prev.value += curr.value;
              } else {
                lineChildren.push(curr);
              }
              return lineChildren;
            }, [])
        )
      ),
    });
  }
};
