const jestInCase = require('jest-in-case')
const { toJSON, loadFixtures } =  require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

jestInCase(
  'Question Markdown to AST (Async)',
  async fixture => {
    const parser = getParser(parserTypes.QUESTION)
    const ast = await parser.parse(fixture.text, { compact: true })
    expect(toJSON(ast)).toEqual(fixture.ast)
  },
  loadFixtures(__dirname)
)
