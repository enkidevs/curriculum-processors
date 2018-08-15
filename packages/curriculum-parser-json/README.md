# JSON -> AST for Enki Curriculum

This parser processes an [Enki JSON](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-compiler-json) and produces the [Enki Curriculum AST](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser-markdown).

```js
const {
  contentTypes: { INSIGHT }
} = require("@enkidevs/curriculum-helpers");
const {
  getParser: getMarkdownParser
} = require("@enkidevs/curriculum-parser-markdown");
const {
  getCompiler: getJSONCompiler
} = require("@enkidevs/curriculum-compiler-json");
const {
  getParser: getJSONParser
} = require("@enkidevs/curriculum-parser-json");

const jsonCompiler = getJSONCompiler(INSIGHT);
const mdParser = getMarkdownParser(INSIGHT);
const jsonParser = getJSONParser(INSIGHT);

// get ast from a string
const ast = mdParser.parseSync(sampleInsight)

// get json from ast
const json = jsonCompiler.compileSync(ast)

// get ast back from json (using this package)
const ast2 = jsonParser.parseSync(json)
```