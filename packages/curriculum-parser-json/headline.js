const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown')
const unistBuilder = require('unist-builder')

const markdownToAstParser = getMarkdownParser(contentTypes.MARKDOWN)

module.exports.parseSync = function parseSync(json) {
  assertHeadline(json)
  const headlineAST = markdownToAstParser.parseSync(json.headline)
  return createHeadlineNode(headlineAST)
}

module.exports.parse = async function parse(json) {
  assertHeadline(json)
  const headlineAST = await markdownToAstParser.parse(json.headline)
  return createHeadlineNode(headlineAST)
}

function createHeadlineNode(headlineAST) {
  // remove unnecessarily nested paragraph node
  if (headlineAST.children[0].type === 'paragraph') {
    headlineAST.children = headlineAST.children[0].children
  }

  return unistBuilder('headline', headlineAST)
}

function assertHeadline(json) {
  if (!json.headline) {
    throw new Error('Missing required [headline] node')
  }
}
