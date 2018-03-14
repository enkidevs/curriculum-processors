const remarkStringify = require('remark-stringify')
const {
  getProcessor,
  getTransformers,
  transformerTypes
} = require('@enkidevs/curriculum-transformers')

module.exports = function stringCompiler(sourceTransformerType) {

  function createProcessor() {
    return getProcessor(transformerTypes.BASE)
      .use(remarkStringify, {
        bullet: '*',
        listItemIndent: 1,
        rule: '-',
        ruleSpaces: false
      })
      .use(getTransformers(sourceTransformerType))
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
