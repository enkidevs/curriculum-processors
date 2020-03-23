const path = require('path');
const jestInCase = require('jest-in-case');
const jsonfile = require('jsonfile');
const { contentTypes, compactAst } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('../../index');

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'insight', dir, name);

jestInCase(
  'Insight JSON to AST Parsing (Sync)',
  (fixture) => {
    const parser = getParser(contentTypes.INSIGHT);
    const ast = parser.parseSync(fixture.input);
    expect(JSON.parse(JSON.stringify(compactAst(ast)))).toEqual(fixture.ast);
  },
  ['sample'].map((dir) => ({
    input: jsonfile.readFileSync(fixturePath(dir, 'input.json')),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
);
