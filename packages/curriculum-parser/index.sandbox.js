// Use this sandbox to play with the parser
const parser = require('./index')
const { compactAst } = require('../curriculum-helpers')

const ast = parser.getParser('question')
  .parseSync(`Print the lines which contain \`eth0\` by pipelining \`ifconfig\` ‘s output :

\`\`\`
$ ??? ??? ??? eth0
\`\`\`

*\`ifconfig\`
*\`|\`
*\`grep\`
*\`>\`
*\`>>\`
`)

process.stdout.write(JSON.stringify(ast, null, 2))
