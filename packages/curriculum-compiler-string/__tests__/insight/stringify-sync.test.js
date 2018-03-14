const jestInCase = require('jest-in-case')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('@enkidevs/curriculum-parser')
const { loadFixtures } =  require('../../../../test-helpers')
const { getCompiler } = require('../../index')

jestInCase(
  'Insight AST to String Compilation (Sync)',
  fixture => {
    const parser = getParser(contentTypes.INSIGHT)
    const compiler = getCompiler(contentTypes.INSIGHT)
    const ast = parser.parseSync(fixture.text)
    const str = compiler.compileSync(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures('insight')
)
