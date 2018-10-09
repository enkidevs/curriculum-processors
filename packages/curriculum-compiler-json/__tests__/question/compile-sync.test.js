const path = require('path');
const jestInCase = require('jest-in-case');
const jsonfile = require('jsonfile');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getCompiler } = require('../../index');

const fixturePath = (dir, name) =>
  path.join(__dirname, '../', 'fixtures', 'question', dir, name);

jestInCase(
  'Insight AST to JSON Compilation (Sync)',
  fixture => {
    const compiler = getCompiler(contentTypes.QUESTION);
    const json = compiler.compileSync(fixture.ast);
    expect(json).toEqual(fixture.parsed);
  },
  ['sample'].map(dir => ({
    parsed: jsonfile.readFileSync(fixturePath(dir, 'parsed.json')),
    ast: jsonfile.readFileSync(fixturePath(dir, 'ast.json')),
  }))
);
