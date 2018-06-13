# Enki Curriculum Compiler JSON

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-compiler-json.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-compiler-json

Compiles Enki Curriculum AST into a json object.

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors)  for more details.

## How it works

The compiler works in the following way:

1. Iterates over all `children` of the AST provided
    - looks at the `type` value of each top-most node
    - if type is `"yaml"` => fires [metadata](#metadata) compiler
    - if type is `"headline"` => fires [headline](#headline) compiler
    - if type is `"section"`, it looks at the `name` field of the node
      - if name is `"Content"` => returns `{ content: compileString(node) }`
      - if name is `"Game Content"` => returns `{ gameContent: compileString(node) }`
      - if name is `"Exercise"` => returns `{ exercise: compileString(node) }`
      - if name is `"Practice"` => fires [question](#question) compiler with "practice" argument
      - if name is `"Revision"` => fires [question](#question) compiler with "revision" argument
      - if name is `"Quiz"` => fires [quiz](#quiz) compiler
      - if name is `"Footnotes"` => fires [footnotes](#footnotes) compiler
      - otherwise throws an error
    - otherwise throws an error
2. combines all JSON properties returned by each sub-compiler into a single object
3. returns the final JSON object

## Compilers

Most of the compilers make use of the [string compiler](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-compiler-string) on top of which they do subsequent modifications.

Each of them will return a simple object `{ key: value }`

### Headline

```javascript
compilers.headline(node)
```

Given an AST node as input:

```json
{
  "type": "headline",
  "children": [
    {
      "type": "text",
      "value": "Sample title",
      ///
      }
    }
  }
```

It will compile the node, remove the `\n`s, trim the string and return an object:

```json
{
  "headline": "Sample title"
}
```

### Metadata

```javascript
compilers.metadata(node)
```

Given an AST node as input:

```json
{
  "type": "yaml",
  "value": "author: catalin\n\nlevels:\n  - basic\n  - medium\n  -...",
  "data": {
    "parsedData": {
      "author": "catalin",
      ...
    }
  }
```

It will return the already parsed data in `node.data.parsedValue`:

```json
{
  "metadata": {
    "author": "catalin",
    ...
  }
}
```

### Question

```javascript
compilers.question(node, 'key')
```

This compiler is used for both "Practice" and "Revision" questions. Apart from the `ast`, this compiler takes another argument `key`:

```javascript
question(ast, key) { /* ... */ }
```

Given a question AST node as input and a `key`:

```json
{
  "type": "section",
  "name": "Revision" || "Practice",
  "children": [...]
}
```

It will return:

```json
{
  "key": {
    "rawText": "question with two gaps ??? ???\n* answer1\n*answer2\nanswer3",
    "question": "question with two gaps ??? ???",
    "answers": [
      {
        "text": "answer1",
        "correct": true,
        "correctIndex": 0
      },
      {
        "text": "answer2",
        "correct": true,
        "correctIndex": 1
      },
      {
        "text": "answer3",
        "correct": false,
        "correctIndex": null
      }
    ]
  }
}
```

Each answer will have its `text`, a `correct` flag indicating if it's one of the correct answers of the question and a `correctIndex` integer which indicates the index of the question gap it should match.

### Quiz

```javascript
compilers.quiz(node)
```

This compiler is similar to the `question` compiler. In addition, it returns a `headline` field specific to quizzes.

Because quiz question don't have question gaps `???`, the first answer will be marked as `correct` (from within the parser).

Given an AST node:

```json
{
  "type": "section",
  "name": "Quiz",
  "children": [ ... ]
}
```

It returns the following object:

```json
{
  "quiz": {
    "rawText": "### Quiz name\nQuiz text\n* answer1\nanswer2",
    "headline": "Quiz name",
    "question": "Quiz text",
    "answers": [
       {
        "text": "answer1",
        "correct": true,
        "correctIndex": 0
      },
      {
        "text": "answer2",
        "correct": false,
        "correctIndex": null
      }
    ]
  }
}
```

### Footnotes

```javascript
compilers.footnotes(node)
```

Given an AST node:

```json
{
  "type": "section",
  "name": "Footnotes",
  "children": [ ... ]
}
```

It returns the following object:

```json
{
  "footnotes": {
    "rawText": "fullFootnotesText",
    "items": [
      {
        "number": 1,
        "name": "Footnote name",
        "text": "Footnote text"
      },
       {
        "number": 2,
        "name": "Footnote name 2",
        "text": "Footnote text 2"
      }
    ]
  }
}
```

## Schema

The final schema of a compiled JSON looks like:

```json
{
  "metadata": {
    "author": "catalin",
    "levels": [
      "basic",
      "medium",
      "advanced"
    ],
    "type": "normal",
    "category": "must-know",
    "standards": {
      "sql.use-dql.0": 10,
      "sql.use-ddl.1": 1000
    },
    "tags": [
      "introduction",
      "workout"
    ],
    "stub": false,
    "links": [
      {
        "name": "EnkiCool",
        "url": "https://enki.com",
        "nature": "website"
      }
    ]
  },
  "headline": "Sample title with `code` within",
  "content": "This is a sample paragraph.[1]\n\nThis is a sample list[2]:\n\n* item one\n* item `two`\n\nSample code[3]:\n\n```javascript\nconsole.log('sample code')\n```\n",
  "gameContent": "Sample game content\n",
  "exercise": "Sample exercise\n",
  "practice": {
    "rawText": "This is a sample question with one gap:\n\n???\n\n* correct\n* incorrect\n* not a chance\n",
    "question": "This is a sample question with one gap:\n\n???\n",
    "answers": [
      {
        "text": "correct",
        "correct": true,
        "correctIndex": 0
      },
      {
        "text": "incorrect",
        "correct": true,
        "correctIndex": 1
      },
      {
        "text": "not a chance",
        "correct": true,
        "correctIndex": 2
      }
    ]
  },
  "revision": {
    "rawText": "This is a sample question with two gaps:\n\n???\n\n???\n\n* correct\n* also correct\n* nah bro\n* fam, just no\n",
    "question": "This is a sample question with two gaps:\n\n???\n\n???\n",
    "answers": [
      {
        "text": "correct",
        "correct": true,
        "correctIndex": 0
      },
      {
        "text": "also correct",
        "correct": false,
        "correctIndex": null
      },
      {
        "text": "nah bro",
        "correct": false,
        "correctIndex": null
      },
      {
        "text": "fam, just no",
        "correct": false,
        "correctIndex": null
      }
    ]
  },
  "quiz": {
    "rawText": "### Quiz title\n\n\nSample quiz question\n\n* correct\n* *incorrect*\n* not a `chance`\n* nope\n",
    "headline": "Quiz title",
    "question": "Sample quiz question\n",
    "answers": [
      {
        "text": "correct",
        "correct": true,
        "correctIndex": 0
      },
      {
        "text": "*incorrect*",
        "correct": false,
        "correctIndex": null
      },
      {
        "text": "not a `chance`",
        "correct": false,
        "correctIndex": null
      },
      {
        "text": "nope",
        "correct": false,
        "correctIndex": null
      }
    ]
  },
  "footnotes": {
    "rawText": "[1: Paragraph]\nSample explanation\n\n[2: List]\nSample list\n\n[3: Code]\nSample code\n\n```javascript\nvar x = 10\n```\n",
    "items": [
      {
        "number": "1",
        "name": " Paragraph",
        "text": "\nSample explanation\n\n"
      },
      {
        "number": "2",
        "name": " List",
        "text": "\nSample list\n\n"
      },
      {
        "number": "3",
        "name": " Code",
        "text": "\nSample code\n\n```javascript\nvar x = 10\n```\n"
      }
    ]
  }
}
```

## API

Use the package like:

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getCompiler
} = require('@enkidevs/curriculum-compiler-json')

const json = getCompiler(contentTypes.INSIGHT).compileSync(ast)
```
