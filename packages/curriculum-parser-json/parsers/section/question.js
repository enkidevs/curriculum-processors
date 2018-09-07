const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const unistBuilder = require('unist-builder');

const questionToAstParser = getMarkdownParser(contentTypes.QUESTION);

module.exports.parseSync = function parseSync(name, json) {
  const ast = questionToAstParser.parseSync(json.rawText);
  return createQuestion(name, ast);
};

module.exports.parse = async function parse(name, json) {
  const ast = await questionToAstParser.parse(json.rawText);
  return createQuestion(name, ast);
};

function createQuestion(name, questionAst) {
  const { children } = questionAst;
  return unistBuilder('section', {
    name,
    children,
    question: true,
  });
}
