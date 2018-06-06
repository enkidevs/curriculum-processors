const path = require('path')
const fs = require('fs')
const jestInCase = require('jest-in-case')
const jsonfile = require('jsonfile')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getCompiler } = require('../../index')

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'question', dir, name)

jestInCase(
  'Question AST to String Compilation (Async)',
  async fixture => {
    const compiler = getCompiler(contentTypes.QUESTION)
    const str = await compiler.compile(fixture.ast)
    expect(str).toEqual(fixture.stringified)
  },
  ['code', 'quiz'].map(dir => ({
    stringified: fs.readFileSync(fixturePath(dir, 'stringified.md'), 'utf8'),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
)
