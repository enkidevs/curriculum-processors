const map = require('unist-util-map')
const jsYaml = require('js-yaml')

module.exports = function yaml () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.yaml = function (node) {
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

  return transform

  function transform (ast) {
    return map(ast, function (node) {
      if (node.type == 'yaml') {
        const parsedValue = jsYaml.safeLoad(node.value, 'utf8')
        const newNode = {
          ...node,
          data: {
            parsedValue
          }
        }
        const { links } = parsedValue
        if (Array.isArray(links)) {
          newNode.data.parsedValue.links = links.map(getMarkdownLink)
        }
        return newNode
      } else {
        return node
      }
    })
  }
}

// https://github.com/chjj/marked/blob/master/lib/marked.js#L455 (slightly hacked with {type})
const mdUrlRegEx = /\[(.*)\]\((.*)\)/
const mdUrlRegExWithType = /\[(.*)\]\((.*)\)\{(.*)\}/

function getMarkdownLink (link) {
  let result
  if (mdUrlRegExWithType.test(link)) {
    result = mdUrlRegExWithType.exec(link)
    return { name: result[1], url: result[2], nature: result[3] }
  }
  if (mdUrlRegEx.test(link)) {
    result = mdUrlRegEx.exec(link)
    return { name: result[1], url: result[2], nature: 'website' }
  }
  console.log('not found', mdUrlRegExWithType.test(link))
  return {
    nature: 'website',
    name: getDomainFromURL(link),
    url: link
  }
}

// http://stackoverflow.com/questions/8498592/extract-root-domain-name-from-string
function getDomainFromURL (url) {
  if (url) {
    let domain
    // find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf('://') > -1) {
      domain = url.split('/')[2]
    } else {
      domain = url.split('/')[0]
    }

    // find & remove port number
    domain = domain.split(':')[0]

    return domain
  }
  return null
}
