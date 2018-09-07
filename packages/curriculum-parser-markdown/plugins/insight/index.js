const remarkFrontmatter = require('remark-frontmatter');
const headline = require('./headline');
const image = require('./image');
const section = require('./section');
const validators = require('./validators');
const yaml = require('./yaml');

module.exports = [
  remarkFrontmatter,
  yaml,
  headline,
  section,
  image,
  ...validators,
];
