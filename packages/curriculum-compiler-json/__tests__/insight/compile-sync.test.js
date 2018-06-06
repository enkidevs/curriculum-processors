const path = require('path')
const jestInCase = require('jest-in-case')
const jsonfile = require('jsonfile')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getCompiler } = require('../../index')

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'insight', dir, name)

jestInCase(
  'Insight AST to JSON Compilation (Sync)',
  fixture => {
    const compiler = getCompiler(contentTypes.INSIGHT)
    const json = compiler.compileSync(fixture.ast)
    expect(json).toEqual(fixture.parsed)
  },
  ['sample', 'exercise'].map(dir => ({
    parsed: jsonfile.readFileSync(fixturePath(dir, 'parsed.json')),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
)
