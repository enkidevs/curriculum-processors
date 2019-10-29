// Use this sandbox to play with the parser
const parser = require('./index');
const { compactAst } = require('../curriculum-helpers');

const ast = parser.getParser('question').parseSync(`
---
## Revision

What are the answers?

a = ???
b = ???

* 1
`);

process.stdout.write(JSON.stringify(compactAst(ast), null, 2));
