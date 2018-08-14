const unified = require('unified')
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

function getProcessor(type) {
  return unified().use(getPlugins(type))
}

function getParser(type) {
  function parse(md) {
    return new Promise((resolve, reject) => {
      const processor = getProcessor(type)
      processor.run(processor.parse(md), (err, ast) => {
        if (err) return reject(err)
        resolve(ast)
      })
    })
  }

  function parseSync(md) {
    const processor = getProcessor(type)
    const ast = processor.runSync(processor.parse(md))
    return ast
  }

  return {
    parse,
    parseSync,
  }
}

module.exports = {
  getParser,
  getProcessor,
  plugins,
}
