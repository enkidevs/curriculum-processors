const compactAst = require('mdast-util-compact')
const { getProcessor } = require('@enkidevs/curriculum-transformers')

function getParser (type) {

  function parse (md, { compact = false } = {}) {
    const processor = getProcessor(type)
    return new Promise((resolve, reject) => {
      processor.run(processor.parse(md), (err, ast) => {
        if (err) return reject(err)
        resolve(compact ? compactAst(ast) : ast)
      })
    })
  }

  function parseSync (md, { compact = false } = {}) {
    const processor = getProcessor(type)
    const ast = processor.runSync(processor.parse(md))
    return compact ? compactAst(ast) : ast
  }

  return {
    parse,
    parseSync,
  }
}

module.exports = {
  getParser
}
