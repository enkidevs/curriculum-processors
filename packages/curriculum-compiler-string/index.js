const unified = require('unified')
const remarkStringify = require('remark-stringify')
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const plugins = require('./plugins')

function getPlugins(type) {
  switch (type) {
    case contentTypes.INSIGHT:
      return [...plugins.insight]
    case contentTypes.QUESTION:
      return [...plugins.question]
    default:
      throw new Error(`Invalid content type type: ${type}`)
  }
}

module.exports = function stringCompiler(type) {

  function createProcessor() {
    return unified()
      .use(contentTypes.MARKDOWN)
      .use(remarkStringify, {
        bullet: '*',
        listItemIndent: 1,
        rule: '-',
        ruleSpaces: false
      })
      .use(getPlugins(type))
  }

  function compile (ast) {
    return new Promise((resolve, reject) => {
      const processor = createProcessor()
      processor.run(ast, (err, ast) => {
        if (err) return reject(err)
        resolve(processor.stringify(ast))
      })
    })
  }

  function compileSync (ast) {
    const processor = createProcessor()
    return processor.stringify(ast)
  }

  return {
    compile,
    compileSync
  }
}
