const unified = require('unified')
const base = require('./base')
const insight = require('./insight')
const question = require('./question')

const transformerTypes = {
  BASE: 'base',
  INSIGHT: 'insight',
  EXERCISE: 'exercise',
  QUESTION: 'question'
}

function getTransformers (type) {
  switch (type) {
    case transformerTypes.BASE:
      return [...base]
    case transformerTypes.INSIGHT:
    case transformerTypes.EXERCISE:
      return [
        ...insight,
        ...question
      ]
    case transformerTypes.QUESTION:
      return [...question]
    default:
      throw `Invalid type ${type}`
  }
}

function getProcessor (type) {
  let transformers = getTransformers(type)
  if (type !== transformerTypes.BASE) {
    transformers = getTransformers(transformerTypes.BASE)
      .concat(transformers)
  }
  return unified().use(transformers)
}

module.exports = {
  getProcessor,
  transformerTypes,
  getTransformers
}
