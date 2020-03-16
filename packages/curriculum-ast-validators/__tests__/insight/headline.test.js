const path = require('path');
const fs = require('fs');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const { getValidator, getSafeValidator } = require('../..');

describe('Fail insight headline parsing', () => {
  describe('Fail for insights with missing headline', () => {
    const text = fs.readFileSync(
      path.join(__dirname, '../', 'fixtures', 'insight', 'missing-headline.md'),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    test('validator should throw on missing headline', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.INSIGHT).headline(ast);
      }).toThrow(/Must have exactly 1 headline but found \d+ instead/);
    });

    test('safeValidator should return error on missing headline', () => {
      const ast = parser.parseSync(text);
      const error = getSafeValidator(contentTypes.INSIGHT).headline(ast);
      expect(error.message).toMatch(
        /Must have exactly 1 headline but found \d+ instead/
      );
    });
  });
});
