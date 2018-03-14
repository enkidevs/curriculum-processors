const { loadErrorFixture } = require('../test-helpers')
const { getParser, parserTypes } = require('../../index')

describe('Fail insight yaml parsing', () => {
  describe('Fail for insights with missing yaml configuration', () => {
    const { text } = loadErrorFixture(__dirname, 'missing-yaml.md')

    let parser
    beforeEach(() => {
      parser = getParser(parserTypes.INSIGHT)
    })

    test('parseSync should throw on missing yaml', () => {
      expect(() => {
        parser.parseSync(text)
      }).toThrow(
        /Must have exactly 1 yaml configuration but found \d+ instead./
      )
    })

    test('parse should throw on missing yaml', () => {
      expect(async () => {
        await parser
          .parse(text)
          .rejects.toThrow(
            /Must have exactly 1 yaml configuration but found \d+ instead./
          )
      })
    })
  })
})
