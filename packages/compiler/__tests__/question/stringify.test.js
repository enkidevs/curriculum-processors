const jestInCase = require('jest-in-case')
const { loadFixtures } =  require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

jestInCase(
  'Question AST to String Compilation (Async)',
  async fixture => {
    const parser = getParser(parserTypes.QUESTION)
    const compiler = getCompiler(compilerTypes.STRING)
    const ast = await parser.parse(fixture.text)
    const str = await compiler.compile(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures(__dirname)
)
