const path = require('path')
const fs = require('fs')
const jestInCase = require('jest-in-case')
const jsonfile = require('jsonfile')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getCompiler } = require('../../index')

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'insight', dir, name)

jestInCase(
  'Insight AST to String Compilation (Sync)',
  fixture => {
    const compiler = getCompiler(contentTypes.INSIGHT)
    const str = compiler.compileSync(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  ['exercise', 'sample'].map(dir => ({
    stringified: fs.readFileSync(fixturePath(dir, 'stringified.md'), 'utf8'),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
)
