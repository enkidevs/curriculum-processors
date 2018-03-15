const unified = require('unified')
const compactAst = require('mdast-util-compact')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const plugins = require('./plugins')

function getPlugins(type) {
  switch (type) {
    case contentTypes.MARKDOWN:
      return [...plugins.markdown]
    case contentTypes.EXERCISE:
    case contentTypes.INSIGHT:
      return [...plugins.markdown, ...plugins.insight, ...plugins.question]
    case contentTypes.QUESTION:
      return [...plugins.markdown, ...plugins.question]
    default:
      throw `Invalid type ${type}`
  }
}

function getParser(type) {
  function parse(md, { compact = false } = {}) {
    return new Promise((resolve, reject) => {
      const processor = unified().use(getPlugins(type))
      processor.run(processor.parse(md), (err, ast) => {
        if (err) return reject(err)
        resolve(compact ? compactAst(ast) : ast)
      })
    })
  }

  function parseSync(md, { compact = false } = {}) {
    const processor = unified().use(getPlugins(type))
    const ast = processor.runSync(processor.parse(md))
    return compact ? compactAst(ast) : ast
  }

  return {
    parse,
    parseSync
  }
}

module.exports = {
  getParser,
  plugins
}
