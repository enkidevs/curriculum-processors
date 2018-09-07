const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const unistBuilder = require('unist-builder');

const footnotesToAstParser = getMarkdownParser(contentTypes.MARKDOWN);

module.exports.parseSync = function parseSync(name, json) {
  const ast = footnotesToAstParser.parseSync(json.rawText);
  return createFootnotes(name, ast);
};

module.exports.parse = async function parse(name, json) {
  const ast = await footnotesToAstParser.parse(json.rawText);
  return createFootnotes(name, ast);
};

function createFootnotes(name, footnotesAst) {
  const { children } = footnotesAst;
  return unistBuilder('section', {
    name,
    children,
    footnotes: true,
  });
}
