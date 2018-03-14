const jestInCase = require('jest-in-case')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('@enkidevs/curriculum-parser')
const { loadFixtures } =  require('../../../../test-helpers')
const { getCompiler } = require('../../index')

jestInCase(
  'Question AST to String Compilation (Sync)',
  fixture => {
    const parser = getParser(contentTypes.QUESTION)
    const compiler = getCompiler(contentTypes.QUESTION)
    const ast = parser.parseSync(fixture.text)
    const str = compiler.compileSync(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures('insight')
)
