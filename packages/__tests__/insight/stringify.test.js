const jestInCase = require('jest-in-case')
const { loadFixtures } =  require('../test-helpers')
const { getCompiler, compilerTypes, getParser, parserTypes } = require('../../index')

jestInCase(
  'Insight AST to String Compilation (Async)',
  async fixture => {
    const parser = getParser(parserTypes.INSIGHT)
    const compiler = getCompiler(parserTypes.INSIGHT, compilerTypes.STRING)
    const ast = await parser.parse(fixture.text)
    const str = await compiler.compile(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures(__dirname)
)
