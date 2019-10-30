const path = require('path');
const fs = require('fs');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('../..');

describe('Fail insight question parsing', () => {
  describe('Fail for insights with invalid question answers', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'question',
        'error',
        'invalid-question-answers.md'
      ),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.QUESTION);
    });

    test('parseSync should throw on invalid question answers', () => {
      expect(() => {
        parser.parseSync(text);
      }).toThrow();
    });

    test('parse should throw on invalid question answers', async () => {
      expect.assertions(1);
      await expect(parser.parse(text)).rejects.toThrow();
    });
  });
});
