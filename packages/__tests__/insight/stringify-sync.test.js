const jestInCase = require('jest-in-case')
const { loadFixtures } =  require('../test-helpers')
const { getCompiler, compilerTypes, getParser, parserTypes } = require('../../index')

jestInCase(
  'Insight AST to String Compilation (Sync)',
  fixture => {
    const parser = getParser(parserTypes.INSIGHT)
    const compiler = getCompiler(parserTypes.INSIGHT, compilerTypes.STRING)
    const ast = parser.parseSync(fixture.text)
    const str = compiler.compileSync(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures(__dirname)
)
