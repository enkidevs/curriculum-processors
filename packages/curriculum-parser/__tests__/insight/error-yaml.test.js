const path = require('path')
const fs = require('fs')
const { contentTypes } = require('@enkidevs/curriculum-helpers')
const { getParser } = require('../../index')

describe('Fail insight yaml parsing', () => {
  describe('Fail for insights with missing yaml configuration', () => {
    const text = fs.readFileSync(
      path.join(
        __dirname,
        '../',
        'fixtures',
        'insight',
        'error',
        'missing-yaml.md'
      ),
      'utf8'
    )
    let parser
    beforeEach(() => {
      parser = getParser(contentTypes.INSIGHT)
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
