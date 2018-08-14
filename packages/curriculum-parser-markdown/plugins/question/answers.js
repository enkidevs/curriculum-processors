const map = require('unist-util-map')
const visit = require('unist-util-visit')

module.exports = function questionAnswers() {
  return transform

  function transform(ast) {
    const temp = { questionGapCount: 0 }
    ast = map(ast, parseQuestionAnswersList(temp))
    ast = map(ast, parseQuestionAnswersListItems(temp))
    return ast
  }

  function parseQuestionAnswersList(temp) {
    return function one(node, index, parent) {
      if (
        node.type === 'list' &&
        !node.ordered &&
        index === parent.children.length - 1 &&
        (parent.type === 'root' ||
          (parent.type === 'section' && parent.question))
      ) {
        visit(parent, 'questionGap', () => {
          temp.questionGapCount += 1
        })

        return Object.assign({}, node, { answers: true })
      }
      return node
    }
  }

  function parseQuestionAnswersListItems(temp) {
    return function one(node, index, parent) {
      if (
        node.type === 'listItem' &&
        parent.type === 'list' &&
        parent.answers
      ) {
        const correct = getCorrectAndUpdateCount(temp, index)
        return Object.assign({}, node, { correct })
      }
      return node
    }
  }

  function getCorrectAndUpdateCount(temp, index) {
    let correct = index === 0
    if (temp.questionGapCount > 0) {
      correct = true
      temp.questionGapCount -= 1
    }
    return correct
  }
}
