module.exports = function questionGap() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.questionGap = function(node) {
        return '???'
      }
    }
  }
}
