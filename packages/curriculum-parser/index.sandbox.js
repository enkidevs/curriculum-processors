// Use this sandbox to play with the parser
const parser = require('./index')

console.log(
  JSON.stringify(
    parser.getParser(
      'exercise'
    ).parseSync(`---
author: SebaRaba
levels:
  - beginner
  - basic
  - medium
type: exerciseList
links:
  - '[link to official documentation](http://python-3-patterns-idioms-test.readthedocs.io/en/latest/Comprehensions.html) {website}'
  - '[link to a video](https://www.youtube.com/watch?v=3dt4OGnU5sM){video}'
linkType: codewars
link: https://www.codewars.com/kata/stop-gninnips-my-sdrow
standards:
    py.functional-programming-features.0: 3000
---

# Py practice functional features

---

## Exercise

### Question

Practice list comprehensions in python.
`),
  null,
  2
  )
)
