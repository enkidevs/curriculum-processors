const jestInCase = require('jest-in-case')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('@enkidevs/curriculum-parser')
const { loadFixtures } =  require('../../../../test-helpers')
const { getCompiler } = require('../../index')

jestInCase(
  'Insight AST to String Compilation (Async)',
  async fixture => {
    const parser = getParser(contentTypes.INSIGHT)
    const compiler = getCompiler(contentTypes.INSIGHT)
    const ast = await parser.parse(fixture.text)
    const str = await compiler.compile(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  loadFixtures('insight')
)
