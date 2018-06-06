const unistBuilder = require('unist-builder')
const { getCompiler } = require('@enkidevs/curriculum-compiler-string')
const { contentTypes } = require('@enkidevs/curriculum-helpers')

function getInsightCompiler() {
  return getCompiler(contentTypes.INSIGHT)
}
function compileNodeToInsightMarkdown(node) {
  if (!node || !node.children) {
    throw new Error('Cannot compile invalid node')
  }
  return getInsightCompiler().compileSync(unistBuilder('root', node.children))
}

function getAnswersFromNode(node) {
  const answersASTList = node.children.find(
    child => child.type === 'list' && child.answers
  )
  if (!answersASTList || !answersASTList.children) {
    throw new Error('No valid answer list in question node')
  }

  let tempCorrectIndex = 0
  return answersASTList.children.map(answerNode => ({
    text: compileNodeToInsightMarkdown(answerNode).replace('\n', ''),
    correct: answerNode.correct,
    correctIndex: answerNode.correct ? tempCorrectIndex++ : null,
  }))
}

module.exports = {
  compileNodeToInsightMarkdown,
  getAnswersFromNode,
}
