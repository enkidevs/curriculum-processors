// eslint-disable */
// Use this sandbox to play with the parser
const { compactAst } = require('../curriculum-helpers');

const json = {
  metadata: {
    author: 'catalin',
    levels: ['basic', 'medium', 'advanced'],
    type: 'normal',
    category: 'must-know',
    standards: {
      'sql.use-dql.0': 10,
      'sql.use-ddl.1': 1000,
    },
    tags: ['introduction', 'workout'],
    stub: false,
    links: [
      {
        name: 'EnkiCool',
        url: 'https://enki.com',
        nature: 'website',
      },
    ],
  },
  headline: 'Sample title with `code` within',
  content:
    "This is a sample paragraph.[1]\n\nThis is a sample list[2]:\n\n- item one\n- item `two`\n\nSample code[3]:\n\n```javascript\nconsole.log('sample code')\n```\n",
  practice: {
    rawText:
      'This is a sample question with one gap:\n\n???\n\n- correct\n- incorrect\n- not a chance\n',
    question: 'This is a sample question with one gap:\n\n???\n',
    answers: [
      {
        text: 'correct',
        correct: true,
        correctIndex: 0,
      },
      {
        text: 'incorrect',
        correct: true,
        correctIndex: 1,
      },
      {
        text: 'not a chance',
        correct: true,
        correctIndex: 2,
      },
    ],
  },
  revision: {
    rawText:
      'This is a sample question with two gaps:\n\n???\n\n???\n\n- correct\n- also correct\n- nah bro\n- fam, just no\n',
    question: 'This is a sample question with two gaps:\n\n???\n\n???\n',
    answers: [
      {
        text: 'correct',
        correct: true,
        correctIndex: 0,
      },
      {
        text: 'also correct',
        correct: false,
        correctIndex: null,
      },
      {
        text: 'nah bro',
        correct: false,
        correctIndex: null,
      },
      {
        text: 'fam, just no',
        correct: false,
        correctIndex: null,
      },
    ],
  },
  quiz: {
    rawText:
      '### Quiz title\n\n\nSample quiz question\n\n???\n- correct\n- *incorrect*\n- not a `chance`\n- nope\n',
    headline: 'Quiz title',
    question: 'Sample quiz question',
    answers: [
      {
        text: 'correct',
        correct: true,
        correctIndex: 0,
      },
      {
        text: '*incorrect*',
        correct: false,
        correctIndex: null,
      },
      {
        text: 'not a `chance`',
        correct: false,
        correctIndex: null,
      },
      {
        text: 'nope',
        correct: false,
        correctIndex: null,
      },
    ],
  },
  footnotes: {
    rawText:
      '[1: Paragraph]\nSample explanation\n\n[2: List]\nSample list\n\n[3: Code]\nSample code\n\n```javascript\nvar x = 10\n```\n',
    items: [
      {
        number: '1',
        name: ' Paragraph',
        text: '\nSample explanation\n\n',
      },
      {
        number: '2',
        name: ' List',
        text: '\nSample list\n\n',
      },
      {
        number: '3',
        name: ' Code',
        text: '\nSample code\n\n```javascript\nvar x = 10\n```\n',
      },
    ],
  },
};

const { getParser } = require('./index');

const parser = getParser('insight');
(async () => {
  const ast = await parser.parse(json);

  console.log(JSON.stringify(compactAst(ast), null, 2));
})();
