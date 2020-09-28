// Use this sandbox to play with the parser
const parser = require('./index');
const { compactAst } = require('../curriculum-helpers');

const ast = parser.getParser('question').parseSync(`
In the context of coin-based blockchains, the ledger is

1. Test1 ???
2. Test2 ???
3. ??? Test3

1. transaction-based
2. account-based
3. property-based
4. storage-based
`);

process.stdout.write(JSON.stringify(compactAst(ast), null, 2));
