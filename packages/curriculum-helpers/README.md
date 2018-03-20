# Enki Curriculum Helpers

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-helpers.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-helpers

Helpers for parsing/transforming/compiling Enki Curriculum from and to different formats.

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors) for more details.

```js
const { contentTypes, compactAst } = require("@enkidevs/curriculum-helpers")
const { getParser } = require("@enkidevs/curriculum-parser")
console.log(
  JSON.stringify(
    compactAst(
      getParser(contentTypes.INSIGHT).parseSync(`---
author: enki
---

# This is an \`example\`
`)
    ),
    null,
    2
  )
)

```

Logs

```json
{
  "type": "root",
  "children": [
    {
      "type": "yaml",
      "value": "author: enki",
      "data": {
        "parsedValue": {
          "author": "enki"
        }
      }
    },
    {
      "type": "headline",
      "children": [
        {
          "type": "text",
          "value": "This is an "
        },
        {
          "type": "inlineCode",
          "value": "example"
        }
      ]
    }
  ]
}
```
