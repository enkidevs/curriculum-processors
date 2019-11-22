const path = require('path');
const fs = require('fs');
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const { getValidator } = require('../../');

describe('Fail insight question parsing', () => {
  describe('Fail for questions with invalid question answers', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'question',
        'invalid-question-answers.md'
      ),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.QUESTION);
    });

    test('validator should throw on invalid question answers', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.QUESTION).answers(ast);
      }).toThrow();
    });
  });

  describe('Fail for questions with invalid question gap(s)', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'question',
        'invalid-question-gap.md'
      ),
      'utf8'
    );

    let parser;

    beforeEach(() => {
      parser = getParser(contentTypes.QUESTION);
    });

    test('validator should throw on invalid question gap', () => {
      expect(() => {
        const ast = parser.parseSync(text);
        getValidator(contentTypes.QUESTION).gap(ast);
      }).toThrow();
    });
  });
});
