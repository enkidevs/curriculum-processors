const jestInCase = require('jest-in-case')
const { toJSON, loadFixtures } =  require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

jestInCase(
  'Question Markdown to AST (Sync)',
  fixture => {
    const parser = getParser(parserTypes.QUESTION)
    const ast = parser.parseSync(fixture.text)
    expect(toJSON(ast)).toEqual(fixture.ast)
  },
  loadFixtures(__dirname)
)
