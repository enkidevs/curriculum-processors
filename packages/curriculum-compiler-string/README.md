# Enki Curriculum Compiler String

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-compiler-string.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-compiler-string

Compiles Enki Curriculum AST into a markdown string.

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors)  for more details.

## API

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getCompiler
} = require('@enkidevs/curriculum-compiler-string')

const markdownString = getCompiler(contentTypes.INSIGHT).compileSync(ast)
```
