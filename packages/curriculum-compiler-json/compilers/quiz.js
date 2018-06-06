const {
  compileNodeToInsightMarkdown,
  getAnswersFromNode,
} = require('./helpers')

module.exports = function quiz(node) {
  const rawText = compileNodeToInsightMarkdown(node)
  const headline = compileNodeToInsightMarkdown(
    node.children.find(child => child.type === 'questionHeadline')
  )
    .split('\n')
    .join('')
  const answers = getAnswersFromNode(node)

  const question = compileNodeToInsightMarkdown({
    children: node.children.filter(
      child => child.type !== 'questionHeadline' && !child.answers
    ),
  })

  return {
    quiz: {
      rawText,
      headline,
      question,
      answers,
    },
  }
}
