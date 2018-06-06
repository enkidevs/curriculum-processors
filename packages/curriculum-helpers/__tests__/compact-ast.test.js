const compactAst = require('../lib/compact-ast')

describe('Compact AST', () => {
  test('should compact ast', () => {
    const ast = {
      type: 'root',
      children: [
        {
          type: 'questionHeadline',
          children: [
            {
              type: 'text',
              value: 'which algorithm is to be use in the following scenario?',
              position: {
                start: {
                  line: 1,
                  column: 5,
                  offset: 4,
                },
                end: {
                  line: 1,
                  column: 60,
                  offset: 59,
                },
                indent: [],
              },
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Consider a complete, weighted graph. If we want to compute its minimum spanning tree,\nwhich starts from a given node we choose, which algorithm should we use?',
              position: {
                start: {
                  line: 2,
                  column: 1,
                  offset: 60,
                },
                end: {
                  line: 3,
                  column: 73,
                  offset: 218,
                },
                indent: [1],
              },
            },
          ],
          position: {
            start: {
              line: 2,
              column: 1,
              offset: 60,
            },
            end: {
              line: 3,
              column: 73,
              offset: 218,
            },
            indent: [1],
          },
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
              position: {
                start: {
                  line: 6,
                  column: 1,
                  offset: 221,
                },
                end: {
                  line: 6,
                  column: 4,
                  offset: 224,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 6,
              column: 1,
              offset: 221,
            },
            end: {
              line: 6,
              column: 4,
              offset: 224,
            },
            indent: [],
          },
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Prim’s algorithm',
                      position: {
                        start: {
                          line: 8,
                          column: 3,
                          offset: 228,
                        },
                        end: {
                          line: 8,
                          column: 19,
                          offset: 244,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 8,
                      column: 3,
                      offset: 228,
                    },
                    end: {
                      line: 8,
                      column: 19,
                      offset: 244,
                    },
                    indent: [],
                  },
                },
              ],
              position: {
                start: {
                  line: 8,
                  column: 1,
                  offset: 226,
                },
                end: {
                  line: 8,
                  column: 19,
                  offset: 244,
                },
                indent: [],
              },
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Kruskal’s algorithm',
                      position: {
                        start: {
                          line: 9,
                          column: 3,
                          offset: 247,
                        },
                        end: {
                          line: 9,
                          column: 22,
                          offset: 266,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 9,
                      column: 3,
                      offset: 247,
                    },
                    end: {
                      line: 9,
                      column: 22,
                      offset: 266,
                    },
                    indent: [],
                  },
                },
              ],
              position: {
                start: {
                  line: 9,
                  column: 1,
                  offset: 245,
                },
                end: {
                  line: 9,
                  column: 22,
                  offset: 266,
                },
                indent: [],
              },
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Knapsack algorithm',
                      position: {
                        start: {
                          line: 10,
                          column: 3,
                          offset: 269,
                        },
                        end: {
                          line: 10,
                          column: 21,
                          offset: 287,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 10,
                      column: 3,
                      offset: 269,
                    },
                    end: {
                      line: 10,
                      column: 21,
                      offset: 287,
                    },
                    indent: [],
                  },
                },
              ],
              position: {
                start: {
                  line: 10,
                  column: 1,
                  offset: 267,
                },
                end: {
                  line: 10,
                  column: 21,
                  offset: 287,
                },
                indent: [],
              },
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Dijkstra’s algorithm',
                      position: {
                        start: {
                          line: 11,
                          column: 3,
                          offset: 290,
                        },
                        end: {
                          line: 11,
                          column: 23,
                          offset: 310,
                        },
                        indent: [],
                      },
                    },
                  ],
                  position: {
                    start: {
                      line: 11,
                      column: 3,
                      offset: 290,
                    },
                    end: {
                      line: 11,
                      column: 23,
                      offset: 310,
                    },
                    indent: [],
                  },
                },
              ],
              position: {
                start: {
                  line: 11,
                  column: 1,
                  offset: 288,
                },
                end: {
                  line: 11,
                  column: 23,
                  offset: 310,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 8,
              column: 1,
              offset: 226,
            },
            end: {
              line: 11,
              column: 23,
              offset: 310,
            },
            indent: [1, 1, 1],
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 13,
          column: 1,
          offset: 312,
        },
      },
    }

    expect(compactAst(ast)).toEqual({
      type: 'root',
      children: [
        {
          type: 'questionHeadline',
          children: [
            {
              type: 'text',
              value: 'which algorithm is to be use in the following scenario?',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'Consider a complete, weighted graph. If we want to compute its minimum spanning tree,\nwhich starts from a given node we choose, which algorithm should we use?',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'questionGap',
              value: '???',
            },
          ],
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          loose: false,
          children: [
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Prim’s algorithm',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Kruskal’s algorithm',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Knapsack algorithm',
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              loose: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Dijkstra’s algorithm',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  })
})
