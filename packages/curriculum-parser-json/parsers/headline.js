const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const unistBuilder = require('unist-builder');

const markdownToAstParser = getMarkdownParser(contentTypes.MARKDOWN);

module.exports.parseSync = function parseSync(json) {
  assertHeadline(json);
  const headlineAST = markdownToAstParser.parseSync(json.headline);
  return createHeadlineNode(headlineAST);
};

module.exports.parse = async function parse(json) {
  assertHeadline(json);
  const headlineAST = await markdownToAstParser.parse(json.headline);
  return createHeadlineNode(headlineAST);
};

function createHeadlineNode(headlineAST) {
  // remove unnecessarily nested paragraph node
  if (headlineAST.children[0].type === 'paragraph') {
    headlineAST.children = headlineAST.children[0].children;
  }

  if (headlineAST.type !== 'headline') {
    delete headlineAST.type;
  }

  return unistBuilder('headline', headlineAST);
}

function assertHeadline(json) {
  if (!json.headline) {
    throw new Error('Missing required [headline] node');
  }
}
