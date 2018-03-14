const remarkFrontmatter = require('remark-frontmatter')
const yaml = require('./yaml')
const headline = require('./headline')
const section = require('./section')
const image = require('./image')
const validators = require('./validators')

module.exports = [
  remarkFrontmatter,
  yaml,
  headline,
  section,
  image,
  ...validators
]
