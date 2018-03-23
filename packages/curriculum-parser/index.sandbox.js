// Use this sandbox to play with the parser
const parser = require('./index')
const { compactAst } = require('../curriculum-helpers')

const ast = parser.getParser('question')
  .parseSync(`### which algorithm is to be use in the following scenario?
Consider a complete, weighted graph. If we want to compute its minimum spanning tree,
which starts from a given node we choose, which algorithm should we use?


???

* Prim’s algorithm
* Kruskal’s algorithm
* Knapsack algorithm
* Dijkstra’s algorithm

`)

process.stdout.write(JSON.stringify(ast, null, 2))
