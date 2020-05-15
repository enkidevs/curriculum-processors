const remarkFrontmatter = require('remark-frontmatter');
const headline = require('./headline');
const section = require('./section');
const yaml = require('./yaml');
const enkiLinks = require('./enki-links');

module.exports = [remarkFrontmatter, yaml, headline, section, enkiLinks];
