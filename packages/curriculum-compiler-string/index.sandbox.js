// Use this sandbox to play with the compiler
const { getCompiler } = require('./index')

const ast = {
  "type": "root",
  "children": [
    {
      "type": "yaml",
      "value":
        "author: SebaRaba\nlevels:\n  - beginner\n  - basic\n  - medium\ntype: exerciseList\nlinks:\n  - '[link to official documentation](http://python-3-patterns-idioms-test.readthedocs.io/en/latest/Comprehensions.html) {website}'\n  - '[link to a video](https://www.youtube.com/watch?v=3dt4OGnU5sM){video}'\nlinkType: codewars\nlink: https://www.codewars.com/kata/stop-gninnips-my-sdrow\nstandards:\n    py.functional-programming-features.0: 3000",
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 15,
          "column": 4,
          "offset": 436
        },
        "indent": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      },
      "data": {
        "parsedValue": {
          "author": "SebaRaba",
          "levels": ["beginner", "basic", "medium"],
          "type": "exerciseList",
          "links": [
            {
              "name": "link to official documentation",
              "url":
                "http://python-3-patterns-idioms-test.readthedocs.io/en/latest/Comprehensions.html",
              "nature": "website"
            },
            {
              "name": "link to a video",
              "url": "https://www.youtube.com/watch?v=3dt4OGnU5sM",
              "nature": "video"
            }
          ],
          "linkType": "codewars",
          "link": "https://www.codewars.com/kata/stop-gninnips-my-sdrow",
          "standards": {
            "py.functional-programming-features.0": 3000
          }
        }
      }
    },
    {
      "type": "headline",
      "children": [
        {
          "type": "text",
          "value": "Py practice functional features",
          "position": {
            "start": {
              "line": 17,
              "column": 3,
              "offset": 440
            },
            "end": {
              "line": 17,
              "column": 34,
              "offset": 471
            },
            "indent": []
          }
        }
      ]
    },
    {
      "type": "section",
      "name": "Exercise",
      "children": [
        {
          "type": "questionHeadline",
          "children": [
            {
              "type": "text",
              "value": "Question",
              "position": {
                "start": {
                  "line": 22,
                  "column": 5,
                  "offset": 494
                },
                "end": {
                  "line": 22,
                  "column": 13,
                  "offset": 502
                },
                "indent": []
              }
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Practice list comprehensions in python.",
              "position": {
                "start": {
                  "line": 24,
                  "column": 1,
                  "offset": 504
                },
                "end": {
                  "line": 24,
                  "column": 40,
                  "offset": 543
                },
                "indent": []
              }
            }
          ],
          "position": {
            "start": {
              "line": 24,
              "column": 1,
              "offset": 504
            },
            "end": {
              "line": 24,
              "column": 40,
              "offset": 543
            },
            "indent": []
          }
        }
      ]
    }
  ],
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 25,
      "column": 1,
      "offset": 544
    }
  }
}

const x = getCompiler('insight').compileSync(ast)

process.stdout.write(x)
