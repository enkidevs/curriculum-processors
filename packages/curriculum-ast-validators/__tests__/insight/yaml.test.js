const path = require('path');
const fs = require('fs');
const {
  contentTypes,
  insightAspects,
  insightCategories,
} = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const { getValidator } = require('../..');

describe('Fail insight yaml parsing', () => {
  describe('Fail for insights with missing yaml configuration', () => {
    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    const text = fs.readFileSync(
      path.join(__dirname, '../', 'fixtures', 'insight', 'missing-yaml.md'),
      'utf8'
    );

    test('validator should throw on missing yaml', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.INSIGHT).yaml(ast);
      }).toThrow(
        /Must have exactly 1 yaml configuration but found \d+ instead/
      );
    });
  });

  describe('Fail for insights with missing `category` yaml config', () => {
    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'invalid-yaml-category.md'
      ),
      'utf8'
    );

    test('validator should throw on invalid yaml category', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.INSIGHT).yaml(ast);
      }).toThrow(
        // eslint-disable-next-line security/detect-non-literal-regexp
        new RegExp(
          `Invalid insight category "\\w+". Must be one of "${insightCategories.join(
            '", "'
          )}"`
        )
      );
    });
  });

  describe('Fail for insights with invalid `aspect` yaml config', () => {
    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'invalid-yaml-aspects.md'
      ),
      'utf8'
    );

    test('validator should throw on invalid yaml aspect', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.INSIGHT).yaml(ast);
      }).toThrow(
        // eslint-disable-next-line security/detect-non-literal-regexp
        new RegExp(
          // eslint-disable-next-line no-useless-escape
          `Invalid insight aspects "[\\s\\S]+". Valid aspects are "${insightAspects.join(
            '", "'
          )}"`
        )
      );
    });
  });
});
