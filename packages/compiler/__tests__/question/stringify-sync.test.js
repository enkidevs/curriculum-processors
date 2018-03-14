const jestInCase = require('jest-in-case')
const { loadFixtures } =  require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

jestInCase(
  'Question AST to String Compilation (Sync)',
  fixture => {
    const parser = getParser(parserTypes.QUESTION)
    const compiler = getCompiler(compilerTypes.STRING)
    const ast = parser.parseSync(fixture.text)
    const str = compiler.compileSync(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures(__dirname)
)
