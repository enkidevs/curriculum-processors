const path = require('path')
const fs = require('fs')
const jestInCase = require('jest-in-case')
const jsonfile = require('jsonfile')
const { contentTypes, compactAst } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('../../index')

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'question', dir, name)

jestInCase(
  'Question Markdown to AST (Sync)',
  fixture => {
    const parser = getParser(contentTypes.QUESTION)
    const ast = parser.parseSync(fixture.text)
    expect(JSON.parse(JSON.stringify(compactAst(ast)))).toEqual(fixture.ast)
  },
  [
    'code-with-external-question-gap',
    'code-with-multiple-horizontal-question-gaps',
    'code-with-multiple-vertical-question-gaps',
    'quiz',
  ].map(dir => ({
    text: fs.readFileSync(fixturePath(dir, 'text.md'), 'utf8'),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
)
