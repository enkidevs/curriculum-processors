const path = require('path')
const fs = require('fs')
const jestInCase = require('jest-in-case')
const jsonfile = require('jsonfile')
const { contentTypes, compactAst } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('../../index')

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'insight', dir, name)

jestInCase(
  'Insight Markdown to AST (Async)',
  async fixture => {
    const parser = getParser(contentTypes.INSIGHT)
    const ast = await parser.parse(fixture.text)
    expect(JSON.parse(JSON.stringify(compactAst(ast)))).toEqual(fixture.ast)
  },
  ['exercise', 'sample'].map(dir => ({
    text: fs.readFileSync(fixturePath(dir, 'text.md'), 'utf8'),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
)
