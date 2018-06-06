const {
  compileNodeToInsightMarkdown,
  getAnswersFromNode,
} = require('./helpers')

module.exports = function question(node, type) {
  if (!node.question) {
    throw new Error(`Invalid question section ${node.name}`)
  }
  const rawText = compileNodeToInsightMarkdown(node)
  const answers = getAnswersFromNode(node)
  const question = compileNodeToInsightMarkdown({
    children: node.children.filter(
      child => child.type !== 'list' && !child.answers
    ),
  })

  return {
    [type]: {
      rawText,
      question,
      answers,
    },
  }
}
