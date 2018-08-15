const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown')
const { sectionNames, contentTypes } = require('@enkidevs/curriculum-helpers')
const section = require('./section')
const yaml = require('./yaml')
const headline = require('./headline')

function getParser(type) {
  if (![contentTypes.INSIGHT, contentTypes.EXERCISE].includes(type)) {
    throw new Error(`Unsupported parser type [${type}] requested`)
  }

  return {
    parse,
    parseSync,
  }
}

async function parse(json) {
  const children = await buildChildren(json)
  return createAst(children)
}

function parseSync(json) {
  const children = buildChildrenSync(json)
  return createAst(children)
}

function createAst(children) {
  return unistBuilder('root', children)
}

const sectionNamesArray = Object.values(sectionNames).filter(
  name => name !== 'Game Content'
)

function buildChildrenSync(json) {
  const sectionNamesToParse = sectionNamesArray.filter(sectionName =>
    Boolean(json[sectionName])
  )

  return [
    yaml.parseSync(json),
    headline.parseSync(json),
    ...sectionNamesToParse.map(sectionName => {
      const sectionParser = section[sectionName.toLowerCase()]
      return sectionParser.parseSync(sectionName, json)
    }),
  ]
}

async function buildChildren(json) {
  const sectionNamesToParse = sectionNamesArray.filter(sectionName =>
    Boolean(json[sectionName])
  )

  return Promise.all([
    yaml.parse(json),
    headline.parse(json),
    ...sectionNamesToParse.map(sectionName => {
      const sectionParser = section[sectionName.toLowerCase()]
      return sectionParser.parse(sectionName, json)
    }),
  ])
}

module.exports = {
  getParser,
}
