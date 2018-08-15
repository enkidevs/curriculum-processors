const {
  getParser: getMarkdownParser,
} = require('@enkidevs/curriculum-parser-markdown')
const { sectionNames, contentTypes } = require('@enkidevs/curriculum-helpers')
const unistBuilder = require('unist-builder')
const unistAssert = require('unist-util-assert')
const { safeDump } = require('js-yaml')

function getParser(type) {
  function parse(json) {
    return Promise.resolve(parseSync(json))
  }

  function parseSync(json) {
    switch (type) {
      case contentTypes.EXERCISE:
      case contentTypes.INSIGHT:
        return insightParser(json)
      default:
        throw new Error(`Invalid parser type [${type}] requested`)
    }
  }

  return {
    parse,
    parseSync,
  }
}

function insightParser(json) {
  return unistBuilder('root', buildChildren(json))
}

function buildChildren(json) {
  // these need to be in a specific order
  // also ignoring 'Game Content' for now
  const children = [
    'Content',
    'Practice',
    'Revision',
    'Quiz',
    'Exercise',
    'Footnotes',
  ]

  return [
    parseYaml(json),
    parseHeadline(json),
    ...children
      .map(sectionName => parseSection(sectionName, json))
      .filter(section => {
        try {
          unistAssert(section) // remove undefined sections
        } catch (err) {
          return false
        }
        return true
      }),
  ]
}

function parseYaml(json) {
  if (!json.metadata) {
    throw new Error('Missing required [yaml] node')
  }

  // https://github.com/nodeca/js-yaml#safedump-object---options-
  // note that some whitespace is NOT preserved by the default settings
  const value = safeDump(json.metadata)

  return unistBuilder('yaml', {
    value,
    data: {
      parsedValue: json.metadata,
    },
  })
}

function parseHeadline(json) {
  if (!json.headline) {
    throw new Error('Missing required [headline] node')
  }

  const headlineAST = getMarkdownParser(contentTypes.MARKDOWN).parseSync(
    json.headline
  )

  // remove unnecessarily nested paragraph node
  if (headlineAST.children[0].type === 'paragraph') {
    headlineAST.children = headlineAST.children[0].children
  }

  return unistBuilder('headline', headlineAST)
}

function parseSection(name, json) {
  const sectionDataToParse = json[name.toLowerCase()]
  let children

  if (sectionDataToParse) {
    switch (name) {
      case sectionNames.PRACTICE:
      case sectionNames.REVISION:
      case sectionNames.QUIZ:
        children = getMarkdownParser(contentTypes.QUESTION).parseSync(
          sectionDataToParse.rawText
        ).children

        return { type: 'section', name, children, question: true }
      case sectionNames.CONTENT:
        children = getMarkdownParser(contentTypes.MARKDOWN).parseSync(
          sectionDataToParse
        ).children

        return { type: 'section', name, children }
      case sectionNames.FOOTNOTES:
        children = getMarkdownParser(contentTypes.MARKDOWN).parseSync(
          sectionDataToParse.rawText
        ).children

        return { type: 'section', name, children }
      default:
        return undefined
    }
  }
}

module.exports = {
  getParser,
}
