
module.exports = function questionCode () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.code = function (node) {
        return `\`\`\`${node.lang}\n${node.value}\n\`\`\``
      }
    }
  }
}
