/* eslint-disable */
// Use this sandbox to play with the parser
const ast = {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Revision',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Which of the following data structures is a type of ',
        },
        {
          type: 'emphasis',
          children: [
            {
              type: 'text',
              value: 'maximally-unbalanced',
            },
          ],
        },
        {
          type: 'text',
          value: ' binary tree?',
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
                  value: 'Ordered linked list',
                },
              ],
            },
          ],
          correct: true,
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
                  value: 'Ordered array',
                },
              ],
            },
          ],
          correct: false,
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
                  value: 'Weighted graph',
                },
              ],
            },
          ],
          correct: false,
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
                  value: 'Max-heap',
                },
              ],
            },
          ],
          correct: false,
        },
      ],
      answers: true,
    },
  ],
};

const { getCompiler } = require('./index');
const json = getCompiler('question').compileSync(ast);

console.log(JSON.stringify(json, null, 2));
