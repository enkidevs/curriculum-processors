const path = require('path')
const fs = require('fs')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('../../index')

describe('Fail insight headline parsing', () => {
  describe('Fail for insights with missing headline', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'error',
        'missing-headline.md'
      ),
      'utf8'
    )
    let parser
    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT)
    })

    test('parseSync should throw on missing headline', () => {
      expect(() => {
        parser.parseSync(text)
      }).toThrow(/Must have exactly 1 headline but found \d+ instead./)
    })

    test('parse should throw on missing headline', () => {
      expect(async () => {
        await parser
          .parse(text)
          .rejects.toThrow(
            /Must have exactly 1 headline but found \d+ instead./
          )
      })
    })
  })
})
