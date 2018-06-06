const map = require('unist-util-map')
const decode = require('decode-uri-component')

module.exports = function image() {
  return transform

  function transform(ast) {
    return map(ast, parseImage)
  }

  function parseImage(node) {
    if (node.type === 'image') {
      const decodedUrl = decode(node.url)
      if (decodedUrl.startsWith('<svg')) {
        return Object.assign({}, node, {
          svg: true,
        })
      }
    }
    return node
  }
}
