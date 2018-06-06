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
      throw new Error(`Invalid content type type: ${type}`)
  }
}

function getCompiler(type) {
  function compile(ast) {
    return new Promise((resolve, reject) => {
      const processor = unified().use(getPlugins(type))
      processor.run(ast, (err, ast) => {
        if (err) return reject(err)
        resolve(processor.stringify(ast))
      })
    })
  }

  function compileSync(ast) {
    return unified()
      .use(getPlugins(type))
      .stringify(ast)
  }

  return {
    compile,
    compileSync,
  }
}

module.exports = {
  getCompiler,
}
