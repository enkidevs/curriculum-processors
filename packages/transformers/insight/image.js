const map = require('unist-util-map')
const decode = require('decode-uri-component')

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

  return transform

  function transform (ast) {
    return map(ast, parseImage)
  }

  function parseImage (node) {
    if (node.type === 'image') {
      const decodedUrl = decode(node.url)
      if (decodedUrl.startsWith('<svg')) {
        return {
          ...node,
          svg: true
        }
      }
    }
    return node
  }
}
