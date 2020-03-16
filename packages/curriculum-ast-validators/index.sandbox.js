/* eslint-disable no-console */
const { contentTypes } = require('@enkidevs/curriculum-helpers');
const { getParser } = require('@enkidevs/curriculum-parser-markdown');
const { getValidator, getSafeValidator, validate, validateSafe } = require('.');

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
