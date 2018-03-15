# Enki Curriculum Processors

[Enki curriculum](https://github.com/enkidevs/curriculum) processors are divied into 3 packages:

- [@enkidevs/curriculum-compiler-string](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-compiler-string)
  - Compile parsed curriculum AST into a string
- [@enkidevs/curriculum-parser](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser)
  - Parse curriculum markdown strings into ASTs
- [@enkidevs/curriculum-helpers](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-helpers)
  - Helpers for processing the curriculum

The `curriculum-parser` and the `curriculum-compiler` folders have an `index.sandbox.js` file at their respective root levels who's purpose is to serve as a playground for them.

## Concepts

The text processing architecture is based on [`unifiedjs`](https://unifiedjs.github.io/), mainly it's markdown interfaces via [`remarkjs`](https://remark.js.org/).

The processes provides a parser that generates an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) ([sample AST](https://astexplorer.net/#/gist/0a92bbf654aca4fdfb3f139254cf0bad/ffe102014c188434c027e43661dbe6ec30042ee2)) from a markdown string and a compiler that compiles an AST into a desired platform.

The process of parsing->transforming->compiling is describe on [unified's Github page](https://github.com/unifiedjs/unified#description) as well.

If this is your first time interacting with the curriculum processing tools, and/or if you do not have prior experience with unifiedjs, we suggest you check out [their guides](https://unifiedjs.github.io/#guides) before proceeding.

For working and improving the curriculum tools, we must first understand how unified plugins ecosystem works (via [`through`](https://github.com/wooorm/trough)) and for some advanced cases, how we can [extend the parser](https://github.com/remarkjs/remark/tree/master/packages/remark-parse#extending-the-parser).

## API

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getParser
} = require('@enkidevs/curriculum-parser')
const {
  getCompiler
} = require('@enkidevs/curriculum-compiler-string')

const parser = getParser(contentTypes.INSIGHT)
const ast = parser.parseSync('some markdown string')
const compiler = getCompiler(contentTypes.INSIGHT)
const markdownString = compiler.compileSync(ast)
```
