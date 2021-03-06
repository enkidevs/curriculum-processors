Build: [![CircleCI](https://circleci.com/gh/enkidevs/curriculum-processors.svg?style=svg)](https://circleci.com/gh/enkidevs/curriculum-processors)

# Enki Curriculum Processors

Note: The language used here follows this pattern:

- an `X parser` transforms content *from* format X *to* an AST (abstract syntax tree)
- an `X compiler` transforms content *from* an AST *to* format X

[Enki curriculum](https://github.com/enkidevs/curriculum) processors are divided into packages:

- [@enkidevs/curriculum-compiler-json](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-compiler-json)
  - Compile parsed curriculum AST into a more user-friendly JSON
- [@enkidevs/curriculum-compiler-string](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-compiler-string)
  - Compile parsed curriculum AST into a string
- [@enkidevs/curriculum-helpers](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-helpers)
  - Helpers for processing the curriculum
- [@enkidevs/curriculum-parser-json](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser-json)
  - Parse curriculum json into an AST
- [@enkidevs/curriculum-parser-markdown](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser-markdown)
  - Parse curriculum markdown string into an AST

The text processing architecture of Enki curriculum is based on [`unifiedjs`](https://unifiedjs.github.io/), using its markdown interfaces via [`remarkjs`](https://remark.js.org/).

If this is your first time interacting with the curriculum processing tools, and/or if you do not have prior experience with unifiedjs, we suggest you check out [their guides](https://unifiedjs.github.io/#guides) before proceeding.

The process done on the curriculum by these packages can be summarized as:

`parsing -> transforming -> compiling`


The `curriculum-parser-markdown` and the `curriculum-compiler` folders have an `index.sandbox.js` file at their respective root levels who's purpose is to serve as a playground.

Checkout the individual [packages](https://github.com/enkidevs/curriculum-processors/tree/master/packages) for more details.
## API

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getParser
} = require('@enkidevs/curriculum-parser-markdown')
const {
  getCompiler
} = require('@enkidevs/curriculum-compiler-string')

const parser = getParser(contentTypes.INSIGHT)
const ast = parser.parseSync('some markdown string')
const compiler = getCompiler(contentTypes.INSIGHT)
const markdownString = compiler.compileSync(ast)
```
