const { getCompiler } = require('@enkidevs/curriculum-compiler-string')
const { contentTypes } = require('@enkidevs/curriculum-helpers')

function getInsightCompiler () {
  return getCompiler(contentTypes.INSIGHT)
}
function compileNodeToInsightMarkdown (node) {
  if (!node || !node.children) {
    throw new Error('Cannot compile invalid node')
  }
  return getInsightCompiler().compileSync({
    type: 'root',
    children: node.children
  })
}

function getAnswersFromNode (node) {
  const answersASTList = node.children.find(
    child => child.type === 'list' && child.answers
  )
  if (!answersASTList) {
    throw new Error('No answers in question node')
  }
  return compileNodeToInsightMarkdown({ children: [answersASTList] })
    .split('\n')
    .filter(Boolean)
    .map(i => i.substring(1).trim())
}

module.exports = {
  compileNodeToInsightMarkdown,
  getAnswersFromNode
}
