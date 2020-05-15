const countNodes = require('unist-util-size');
const { compileNodeToMarkdown } = require('./helpers');

const isHeading1 = (node) => node.type === 'heading' && node.depth === 1;

module.exports = function glossary(ast) {
  const heading1Count = countNodes(ast, isHeading1);

  if (heading1Count !== 1 || !isHeading1(ast.children[0])) {
    throw Error('Glossary entry MUST contain a single H1 as the first line');
  }

  const rawText = compileNodeToMarkdown(ast);
  const [headline, ...content] = rawText.split('\n').filter(Boolean);

  return {
    rawText,
    // get rid of first #
    headline: headline.substring(headline.indexOf('#') + 1).trim(),
    content: content.join('\n'),
  };
};
