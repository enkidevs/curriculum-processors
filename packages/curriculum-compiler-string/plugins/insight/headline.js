
module.exports = function headline () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.headline = function (headline) {
        return `# ${headline.value}`
      }
    }
  }
}
