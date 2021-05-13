// Use this sandbox to play with the compiler
const { getCompiler } = require('./index');

const ast = {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value:
        "author: claremarie\n\nlevels:\n\n  - beginner\n\n  - basic\n\ntags:\n\n  - introduction\ntype: exercise\n\nlinkType: website\n\nlink: https://goo.gl/hghspF\n\nstandards:\n\n  python.native-types-operations.0: 1000\n  python.control-structures.1: 1000\n\nlinks:\n  - '[Control Structures in Python](http://interactivepython.org/runestone/static/pythonds/Introduction/ControlStructures.html){website}'\n",
      data: {
        parsedValue: {
          author: 'claremarie',
          levels: ['beginner', 'basic'],
          tags: ['introduction'],
          type: 'exercise',
          linkType: 'website',
          link: 'https://goo.gl/hghspF',
          standards: {
            'python.native-types-operations.0': 1000,
            'python.control-structures.1': 1000,
          },
          links: [
            {
              name: 'Control Structures in Python',
              url: 'http://interactivepython.org/runestone/static/pythonds/Introduction/ControlStructures.html',
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
          value: 'Python Control Flow Exercise',
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
              value: 'Click ',
            },
            {
              type: 'emphasis',
              children: [
                {
                  type: 'text',
                  value: 'Launch Exercise',
                },
              ],
            },
            {
              type: 'text',
              value: ' to open a Python Tutor page.',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This exercise introduces the ',
            },
            {
              type: 'inlineCode',
              value: 'elif',
            },
            {
              type: 'text',
              value: ' keyword. In this construction, if the ',
            },
            {
              type: 'inlineCode',
              value: 'if',
            },
            {
              type: 'text',
              value:
                ' statement evaluates to false, the executor will next check the condition of the ',
            },
            {
              type: 'inlineCode',
              value: 'elif',
            },
            {
              type: 'text',
              value: ' statement. Any number of ',
            },
            {
              type: 'inlineCode',
              value: 'elif',
            },
            {
              type: 'text',
              value:
                's can be chained together; the code block will continue to execute until a true condition is found. Once the code associated with the true condition is executed, the program will skip the rest of the ',
            },
            {
              type: 'inlineCode',
              value: 'if/else',
            },
            {
              type: 'text',
              value: ' block.',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                'After you have executed the Python Tutor code once (it should print ',
            },
            {
              type: 'inlineCode',
              value: 'elif!',
            },
            {
              type: 'text',
              value: '), change the value of ',
            },
            {
              type: 'inlineCode',
              value: 'x',
            },
            {
              type: 'text',
              value: ' so that the program prints ',
            },
            {
              type: 'inlineCode',
              value: 'else!',
            },
            {
              type: 'text',
              value: ' instead.',
            },
          ],
        },
      ],
    },
  ],
};

const x = getCompiler('insight').compileSync(ast);

process.stdout.write(x);
