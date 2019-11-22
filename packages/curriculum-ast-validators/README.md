# Enki Curriculum AST Validators

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-ast-validators.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-ast-validators

Validates [Enki Curriculum AST](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser-markdown).

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors)  for more details.

## Rules

### Headline

There can only be `1` [`Headline`](#headline) node per [`Insight`](#insight). This is checked by the [`headline`](https://github.com/enkidevs/curriculum-processors/blob/master/packages/curriculum-parser-markdown/plugins/insight/validators/headline.js) validator.

### YAML

There can only be `1` [`YAML`](#yaml) metadata node per [`Insight`](#insight). This is checked by the [`yaml`](https://github.com/enkidevs/curriculum-processors/blob/master/packages/curriculum-parser-markdown/plugins/insight/validators/yaml.js) validator.

### Insight Section

The section name must be one of the following:

- Content
- Footnotes
- Revision
- Practice
- Quiz

### Insight Question Gap

The insight question must have at least 1 question gap.

### Insight Question Answers

The insight question must have answers and the number of question gaps must match the number of correct answers

## API

```js
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const {
  getValidator,
  getSafeValidator,
  validate,
  validateSafe,
} = require('@enkidevs/curriculum-ast-validators');

const ast = getParser(contentTypes.INSIGHT).parseSync('# Missing YAML config');

// safely validate any insight property
const error = getSafeValidator(contentTypes.INSIGHT).yaml(ast);
console.error(`${error.message}\n\n`);
// "Must have exactly 1 yaml configuration but found 0 instead"

// safely validate an entire insight
const errors = validateSafe(contentTypes.INSIGHT)(ast);
console.error(`[${errors.map(e => e.message)}]\n\n`);
// ["Must have exactly 1 yaml configuration but found 0 instead"]

// strictly validate any insight property
try {
  getValidator(contentTypes.INSIGHT).yaml(ast);
} catch (e) {
  console.error(`${e.message}\n\n`);
  // "Must have exactly 1 yaml configuration but found 0 instead"
}

// strictly validate an entire insight
try {
  validate(contentTypes.INSIGHT)(ast);
} catch (e) {
  console.error(`${e.message}\n\n`);
  // "Must have exactly 1 yaml configuration but found 0 instead"
}

```
