const remarkStringify = require('remark-stringify');

module.exports = [
  [
    remarkStringify,
    {
      bullet: '*',
      emphasis: '*',
      listItemIndent: 1,
      rule: '-',
      ruleSpaces: false,
      escape: false,
    },
  ],
];
