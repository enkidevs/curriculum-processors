const path = require('path');
const fs = require('fs');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const { getValidator, getSafeValidator } = require('../..');

describe('Fail insight section parsing', () => {
  describe('Fail for insights with wrong section name', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'invalid-section-name.md'
      ),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    test('validator should throw on invalid section name', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.INSIGHT).section(ast);
      }).toThrow(/Section name "[\s\S]*" is invalid/);
    });

    test('safeValidator should return error on invalid section name', () => {
      const ast = parser.parseSync(text);
      const error = getSafeValidator(contentTypes.INSIGHT).section(ast);
      expect(error.message).toMatch(/Section name "[\s\S]*" is invalid/);
    });
  });
});
