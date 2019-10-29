const path = require('path');
const fs = require('fs');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('../../index');

describe('Fail insight section parsing', () => {
  describe('Fail for insights with wrong section name', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'error',
        'invalid-section-name.md'
      ),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT);
    });

    test('parseSync should throw on invalid section name', () => {
      expect(() => {
        parser.parseSync(text);
      }).toThrow(/Section name "[\s\S]*" is invalid/);
    });

    test('parse should throw on invalid section name', async () => {
      expect.assertions(1);
      await expect(parser.parse(text)).rejects.toThrow(
        /Section name "[\s\S]*" is invalid/
      );
    });
  });
});
