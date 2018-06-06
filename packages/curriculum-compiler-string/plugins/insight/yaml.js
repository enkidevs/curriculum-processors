const jsYaml = require('js-yaml')

module.exports = function yaml() {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.yaml = function(node) {
        if (node.data && node.data.parsedValue) {
          const { links } = node.data.parsedValue
          if (Array.isArray(links)) {
            node.data.parsedValue.links = links.map(
              link => `[${link.name}](${link.url}){${link.nature}}`
            )
          }
          const yml = jsYaml.safeDump(node.data.parsedValue)
          return `---\n${yml}---`
        }
      }
    }
  }
}
