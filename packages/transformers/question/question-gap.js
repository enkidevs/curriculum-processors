module.exports = function questionGap () {
  inlineTokenizer.locator = locator

  const { Parser } = this

  // Inject inlineTokenizer
  const inlineTokenizers = Parser.prototype.inlineTokenizers
  const inlineMethods = Parser.prototype.inlineMethods
  inlineTokenizers.questionGap = inlineTokenizer
  inlineMethods.splice(0, 0, 'questionGap')

  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.questionGap = function (node) {
        return node.value
      }
    }
  }

  function locator (value, fromIndex) {
    return value.indexOf('???', fromIndex)
  }

  function inlineTokenizer (eat, value, silent) {
    const match = /^\?{3}/.exec(value)

    if (silent) return silent
    if (!match) return

    const [questionGap] = match

    return eat(questionGap)({
      type: 'questionGap',
      value: questionGap
    })
  }
}
