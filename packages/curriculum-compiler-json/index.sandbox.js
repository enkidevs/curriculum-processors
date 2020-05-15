/* eslint-disable */
// Use this sandbox to play with the parser
const ast = {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'In General Glossary OOP',
          position: {
            start: {
              line: 1,
              column: 3,
              offset: 2,
            },
            end: {
              line: 1,
              column: 26,
              offset: 25,
            },
            indent: [],
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
          line: 1,
          column: 26,
          offset: 25,
        },
        indent: [],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Cute ',
          position: {
            start: {
              line: 3,
              column: 1,
              offset: 27,
            },
            end: {
              line: 3,
              column: 6,
              offset: 32,
            },
            indent: [],
          },
        },
        {
          type: 'emphasis',
          children: [
            {
              type: 'text',
              value: 'markdown',
              position: {
                start: {
                  line: 3,
                  column: 7,
                  offset: 33,
                },
                end: {
                  line: 3,
                  column: 15,
                  offset: 41,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 3,
              column: 6,
              offset: 32,
            },
            end: {
              line: 3,
              column: 16,
              offset: 42,
            },
            indent: [],
          },
        },
        {
          type: 'text',
          value: ' description for the GENERAL topic. ',
          position: {
            start: {
              line: 3,
              column: 16,
              offset: 42,
            },
            end: {
              line: 3,
              column: 52,
              offset: 78,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 3,
          column: 1,
          offset: 27,
        },
        end: {
          line: 3,
          column: 52,
          offset: 78,
        },
        indent: [],
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "function test() {\n    console.log('this is workiiing'); \n}",
      position: {
        start: {
          line: 4,
          column: 1,
          offset: 79,
        },
        end: {
          line: 8,
          column: 4,
          offset: 155,
        },
        indent: [1, 1, 1, 1],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Another ',
          position: {
            start: {
              line: 9,
              column: 1,
              offset: 156,
            },
            end: {
              line: 9,
              column: 9,
              offset: 164,
            },
            indent: [],
          },
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'paragraph',
              position: {
                start: {
                  line: 9,
                  column: 11,
                  offset: 166,
                },
                end: {
                  line: 9,
                  column: 20,
                  offset: 175,
                },
                indent: [],
              },
            },
          ],
          position: {
            start: {
              line: 9,
              column: 9,
              offset: 164,
            },
            end: {
              line: 9,
              column: 22,
              offset: 177,
            },
            indent: [],
          },
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: {
              line: 9,
              column: 22,
              offset: 177,
            },
            end: {
              line: 9,
              column: 23,
              offset: 178,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 9,
          column: 1,
          offset: 156,
        },
        end: {
          line: 9,
          column: 23,
          offset: 178,
        },
        indent: [],
      },
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Could this work',
          position: {
            start: {
              line: 11,
              column: 4,
              offset: 183,
            },
            end: {
              line: 11,
              column: 19,
              offset: 198,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 11,
          column: 1,
          offset: 180,
        },
        end: {
          line: 11,
          column: 19,
          offset: 198,
        },
        indent: [],
      },
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Maybe, not sure about footnote view in app.',
          position: {
            start: {
              line: 15,
              column: 1,
              offset: 202,
            },
            end: {
              line: 15,
              column: 44,
              offset: 245,
            },
            indent: [],
          },
        },
      ],
      position: {
        start: {
          line: 15,
          column: 1,
          offset: 202,
        },
        end: {
          line: 15,
          column: 44,
          offset: 245,
        },
        indent: [],
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
      line: 16,
      column: 1,
      offset: 246,
    },
  },
};
const { getCompiler } = require('./index');
const json = getCompiler('glossary').compileSync(ast);

console.log(JSON.stringify(json, null, 2));
