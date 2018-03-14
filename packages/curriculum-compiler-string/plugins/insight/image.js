
module.exports = function image () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.image = function (node) {
        return `![${node.alt}](${title ? `${node.url} "${title}` : ''})`
      }
    }
  }
}
