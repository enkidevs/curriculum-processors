# Enki Curriculum Processors

[Enki curriculum](https://github.com/enkidevs/curriculum) processors are divied into 3 packages:

- [@enkidevs/curriculum-compiler]()
  - Compile parsed AST into target platforms
- [@enkidevs/curriculum-parser]()
  - Parse curriculum markdown strings into ASTs based on our transformer rules
- [@enkidevs/curriculum-transformers]()
  - Rules on how to parse the curriculum
- [@enkidevs/curriculum-renderer]()
  - Wrapper package that the clients can use to render content to different platforms

The text processing architecture is based on [`unifiedjs`](https://unifiedjs.github.io/), mainly it's markdown interfaces via [`remarkjs`](https://remark.js.org/).

The processes provides a parser that generates an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) ([sample AST](https://astexplorer.net/#/gist/0a92bbf654aca4fdfb3f139254cf0bad/ffe102014c188434c027e43661dbe6ec30042ee2)) from a markdown string and a compiler that compiles an AST into a desired platform. At the moment we have the following compilers:

- [string]()

The process of parsing->transforming->compiling is describe on [unified's Github page](https://github.com/unifiedjs/unified#description) as well.

If this is your first time interacting with the curriculum processing tools, and/or if you do not have prior experience with unifiedjs, we suggest you check out [their guides](https://unifiedjs.github.io/#guides) before proceeding.

For working and improving the curriculum tools, we must first understand how unified plugins ecosystem works (via [`through`](https://github.com/wooorm/trough)) and for some advanced cases, how we can [extend the parser](https://github.com/remarkjs/remark/tree/master/packages/remark-parse#extending-the-parser).

## API

```js
const {
  types: compilerTypes,
  getCompiler
} = require('@enkidevs/curriculum-compiler')
const {
  types: parserTypes,
  getParser
} = require('@enkidevs/curriculum-parser')

const parser = getParser(parserTypes.INSIGHT)
const ast = parser.parseSync('some markdown string')
const compiler = getCompiler(parserTypes.INSIGHT, compilerTypes.STRING)
const markdownString = compiler.compileSync(ast)

// or an insight to html
const insightHtml = getCompiler(
  parserTypes.INSIGHT,
  compilerTypes.HTML
).compileSync(
  getParser(parserTypes.INSIGHT)
    .parseSync('some markdown string for an insight')
)

// or a question to react
const questionReact = getCompiler(
  parserTypes.QUESTION,
  compilerTypes.REACT
).compileSync(
  getParser(parserTypes.QUESTION)
    .parseSync('some markdown string for a question')
)

// there's also shorthands
const {
  html,
  react
} = require('@enkidevs/curriculum-renderer')

const insightHtml = html.insight(
  'some markdown string for an insight'
)

// or a question to react
const questionReact = react.question(
  'some markdown string for a question'
)
```

## Usage

```js
const {
  types, getProcessor
} = require('@enkidevs/curriculum-parser');

const remark2rehype = require('remark-rehype');
const doc = require('rehype-document');
const format = require('rehype-format');
const html = require('rehype-stringify');
var vfile = require('to-vfile');
var report = require('vfile-reporter');

getProcessor(types.INSIGHT)
  .use(remark2rehype)
  .use(doc, { title: 'Insight' })
  .use(format)
  .use(html)
  .process(vfile.readSync('insight.md'), function (err, file) {
    console.error(report(err || file));
    console.log(String(file));
  });
```
