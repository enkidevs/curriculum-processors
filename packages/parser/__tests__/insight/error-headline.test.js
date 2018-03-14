const { loadErrorFixture } = require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

describe('Fail insight headline parsing', () => {
  describe('Fail for insights with missing headline', () => {
    const { text } = loadErrorFixture(__dirname, 'missing-headline.md')

    let parser
    beforeEach(() => {
      parser = getParser(parserTypes.INSIGHT)
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
