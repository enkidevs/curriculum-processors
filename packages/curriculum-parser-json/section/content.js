const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown')
const unistBuilder = require('unist-builder')

const contentToAstParser = getMarkdownParser(contentTypes.MARKDOWN)

module.exports.parseSync = function parseSync(name, json) {
  const ast = contentToAstParser.parseSync(json)
  return createContent(name, ast)
}

module.exports.parse = async function parse(name, json) {
  const ast = await contentToAstParser.parse(json)
  return createContent(name, ast)
}

function createContent(name, contentAst) {
  const { children } = contentAst
  return unistBuilder('section', {
    name,
    children,
    content: true,
  })
}
