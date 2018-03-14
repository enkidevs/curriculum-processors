const stringCompiler = require('./string')

const compilerTypes = {
  STRING: 'string'
}

function getCompiler(sourceTransformerType, targetCompilerType) {
  switch (targetCompilerType) {
    case compilerTypes.STRING:
      return stringCompiler(sourceTransformerType)
    default:
    throw new Error(`Invalid target compiler type ${targetCompilerType}`)
  }
}

module.exports = {
  compilerTypes,
  getCompiler
}
