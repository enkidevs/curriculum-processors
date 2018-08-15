module.exports = function questionCode() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.questionCode = visitors.code
    }
  }
}
