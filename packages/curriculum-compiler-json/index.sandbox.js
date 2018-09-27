/* eslint-disable */
// Use this sandbox to play with the parser
const ast = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value:
        "author: milesflo\n\nlevels:\n\n  - beginner\n\n  - basic\n\ntype: exercise\n\nlink: https://www.codewars.com/kata/classy-classes\nlinkType: codewars\nstandards:\n\n  javascript.execution-context.2: 1000\n  javascript.execution-context.3: 1000\n  javascript.execution-context.4: 1000\n\nlinks:\n\n  - '[MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)'",
      data: {
        parsedValue: {
          author: 'milesflo',
          levels: ['beginner', 'basic'],
          type: 'exercise',
          link: 'https://www.codewars.com/kata/classy-classes',
          linkType: 'codewars',
          standards: {
            'javascript.execution-context.2': 1000,
            'javascript.execution-context.3': 1000,
            'javascript.execution-context.4': 1000,
          },
          links: [
            {
              name: 'MDN - this',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
              nature: 'website',
            },
          ],
        },
      },
    },
    {
      type: 'headline',
      children: [
        {
          type: 'text',
          value: 'JS Practice ',
        },
        {
          type: 'inlineCode',
          value: 'this',
        },
      ],
    },
    {
      type: 'section',
      name: 'Exercise',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Explore the ',
            },
            {
              type: 'inlineCode',
              value: 'this',
            },
            {
              type: 'text',
              value: ' operator in JavaScript with Constructor functions',
            },
          ],
        },
      ],
    },
  ],
};

const { getCompiler } = require('./index');
const json = getCompiler('exercise').compileSync(ast);

console.log(JSON.stringify(json, null, 2));
