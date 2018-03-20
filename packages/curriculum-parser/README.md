# Enki Curriculum Parser

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-parser.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-parser

Parses Enki Curriculum markdown into an AST.

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors)  for more details.

## API

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getParser
} = require('@enkidevs/curriculum-parser')

const ast = getParser(contentTypes.INSIGHT).parseSync(markdownString)
```
