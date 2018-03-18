# Enki Curriculum Compiler String

Parser Enki Curriculum markdown into a an AST.

See [Enki curriculum processors](https://github.com/enkidevs/curriculum-processors)  for more details.

## API

```js
const {
  contentTypes
} = require('@enkidevs/curriculum-helpers')
const {
  getParser
} = require('@enkidevs/curriculum-parser')

const ast = getParser(contentTypes.INSIGHT).parseSync(markdownString)
```
