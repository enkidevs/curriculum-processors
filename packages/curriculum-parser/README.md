# Enki Curriculum Parser

[npm-badge]: https://img.shields.io/npm/v/@enkidevs/curriculum-parser.png?style=flat-square
[npm]: https://www.npmjs.com/package/@enkidevs/curriculum-parser

Parses [Enki Curriculum](https://github.com/enkidevs/curriculum) markdown into an AST.

The text processing architecture of Enki Curriculum is based on [`unifiedjs`](https://unifiedjs.github.io/), using its markdown interfaces via [`remarkjs`](https://remark.js.org/).

The parser generates an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) ([sample AST](https://astexplorer.net/#/gist/0a92bbf654aca4fdfb3f139254cf0bad/ffe102014c188434c027e43661dbe6ec30042ee2)) from a markdown string.

The generated AST follows the [MDAST](https://github.com/syntax-tree/mdast) spec with some custom Enki Curriculum data.

This spec contains examples from [this insight](https://github.com/enkidevs/curriculum/blob/master/comp-sci/data-structures-and-algorithms/binary-search-tree/balanced-vs-unbalanced-binary-trees.md) from the Enki Curriculum.

## Table of Contents

*   [Insight](#insight)
    *   [Headline](#headline)
    *   [Image](#image)
    *   [Section](#section)
    *   [YAML](#yaml)
*   [Question](#question)
    *   [AnswersList](#answerslist)
    *   [AnswersListItem](#answerslistitem)
    *   [Code](#code)
    *   [QuestionGap](#questiongap)
    *   [QuestionHeadline](#questionheadline)
*   [API](#api)

## Insight

Insight follows the regular MDAST spec with some additional [plugins](https://github.com/enkidevs/curriculum-processors/tree/master/packages/curriculum-parser/plugins/insight).

For information on the data (not AST structure) contained in an Insight, checkout the [Enki Curriculum Wiki](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation).

### `Headline`

`Headline` ([`UnistParent`](https://github.com/syntax-tree/unist#parent)) is a substitute node for a [`MDASTHeading`](https://github.com/syntax-tree/mdast/blob/master/readme.md#heading) of depth 1.

```idl
interface Headline <: UnistParent {
  type: "headline";
  value: string;
}
```

For example, the following markdown:

```md
# Coding is fun
```

Yields:

```json
{
  "type": "headline",
  "children": [{
    "type": "text",
    "value": "Coding is fun"
  }]
}
```

There can only be `1` [`Headline`](#headline) node per [`Insight`](#insight). This is checked by the [`headline`](https://github.com/enkidevs/curriculum-processors/blob/master/packages/curriculum-parser/plugins/insight/validators/headline.js) validator.

### `Image`

`Image` ([`UnistNode`](https://github.com/syntax-tree/unist#node)) inherits from [`MDASTImage`](https://github.com/syntax-tree/mdast/blob/master/readme.md#heading).

If the image url contains an encoded SVG (See [How to add images to Enki Curriculum](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#how-to-add-images)), the parses attaches the flag `svg: true`.

```idl
interface Image <: Node {
  type: "image";
  title: string | null;
  alt: string | null;
  url: string;
  svg?: true | false;
}
```

For example, the following markdown:

```md
![balanced](%3Csvg%20width%3D%22100%25%22%20height%3D%22auto%22%20viewBox%3D%220%200%20700%20300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArtboard%3C%2Ftitle%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M350%2085c19.329966%200%2035-15.6700338%2035-35%200-6.7781994-1.926799-13.1063707-5.262556-18.4666731C373.560339%2021.6072003%20362.551767%2015%20350%2015c-19.329966%200-35%2015.6700338-35%2035s15.670034%2035%2035%2035zM210%20185c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C233.560339%20121.6072%20222.551767%20115%20210%20115c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035zM100%20286c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C123.560339%20222.6072%20112.551767%20216%20100%20216c-19.3299662%200-35%2015.670034-35%2035s15.6700338%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M490%20185c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C513.560339%20121.6072%20502.551767%20115%20490%20115c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22465.996094%22%20y%3D%22164%22%3E13%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22197.998047%22%20y%3D%22167%22%3E3%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M600%20286c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C623.560339%20222.6072%20612.551767%20216%20600%20216c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22575.996094%22%20y%3D%22267%22%3E15%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M380%20285c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C403.560339%20221.6072%20392.551767%20215%20380%20215c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22355.996094%22%20y%3D%22266%22%3E10%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%2287.9980469%22%20y%3D%22267%22%3E1%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22337.998047%22%20y%3D%2266%22%3E8%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M325.305402%2075L232%20121.270754M376%2075l89.005263%2049.575516M125%20226.675909L185.724368%20176M516%20175l60.148477%2050.16054M405%20224.911949L464.957392%20175%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)
```

Yields:

```json
{
  "type": "image",
  "title": null,
  "url": "%3Csvg%20width%3D%22100%25%22%20height%3D%22auto%22%20viewBox%3D%220%200%20700%20400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArtboard%3C%2Ftitle%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M350%2095c19.329966%200%2035-15.6700338%2035-35%200-6.7781994-1.926799-13.1063707-5.262556-18.4666731C373.560339%2031.6072003%20362.551767%2025%20350%2025c-19.329966%200-35%2015.6700338-35%2035s15.670034%2035%2035%2035zM210%20195c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C233.560339%20131.6072%20222.551767%20125%20210%20125c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035zM100%20296c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C123.560339%20232.6072%20112.551767%20226%20100%20226c-19.3299662%200-35%2015.670034-35%2035s15.6700338%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M490%20195c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C513.560339%20131.6072%20502.551767%20125%20490%20125c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22465.996094%22%20y%3D%22174%22%3E10%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22197.998047%22%20y%3D%22177%22%3E3%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M600%20296c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C623.560339%20232.6072%20612.551767%20226%20600%20226c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22575.996094%22%20y%3D%22277%22%3E15%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M535%20375c19.329966%200%2035-15.670034%2035-35%200-6.778199-1.926799-13.106371-5.262556-18.466673C558.560339%20311.6072%20547.551767%20305%20535%20305c-19.329966%200-35%2015.670034-35%2035s15.670034%2035%2035%2035z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22%23FFF%22%2F%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22510.996094%22%20y%3D%22356%22%3E13%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%2287.9980469%22%20y%3D%22277%22%3E1%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20font-family%3D%22RobotoMono-Light%2C%20Roboto%20Mono%22%20font-size%3D%2240%22%20font-weight%3D%22300%22%20fill%3D%22currentColor%22%3E%3Ctspan%20x%3D%22337.998047%22%20y%3D%2276%22%3E8%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpath%20d%3D%22M325.305402%2085L232%20131.270754M376%2085l89.005263%2049.575516M125%20236.675909L185.724368%20186M516%20185l60.148477%2050.16054M561%20315.334131L575.702837%20285%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  "alt": "unbalanced",
  "svg": true
}
```

### `Section`

`Section` ([`UnistParent`](https://github.com/syntax-tree/unist#parent)) is a custom node specific to Enki Curriculum.

It is created when text is prefixed with a [`MDASTThematicBreak`](https://github.com/syntax-tree/mdast/blob/master/readme.md#thematicbreak) followed by [`MDASTHeading`](https://github.com/syntax-tree/mdast/blob/master/readme.md#heading) of depth 2.

If a section is one of the [question sections](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#questions), it is marked with the flag `question: true`.

```idl
interface Section <: UnistParent {
  type: "section";
  name: string | null;
  question?: true | false;
}
```

For example, the following markdown:

```md
---
## Content

A binary tree is called *balanced* if every leaf node is not more than a certain distance away from the root than any other leaf.
```

Yields:

```json
{
  "type": "section",
  "name": "Content",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "A binary tree is called "
        },
        {
          "type": "emphasis",
          "children": [
            {
              "type": "text",
              "value": "balanced"
            }
          ]
        },
        {
          "type": "text",
          "value": " if every leaf node is not more than a certain distance away from the root than any other leaf."
        }
      ]
    }
  ]
}
```

### `YAML`

YAML ([`Text`](https://github.com/syntax-tree/unist#text)] follows the same convention as [`MDASTYAML`](https://github.com/syntax-tree/mdast/blob/master/readme.md#yaml).

The [YAML metadata](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#yaml-based-metadata) for an Insight must be the first content at the top (based on [frontmatter](https://github.com/remarkjs/remark-frontmatter) rules).

This parser will additionally format links to contain a "nature" field.

For example, the following YAML:

```yaml
---
author: enki
levels:
  - beginner
  - basic
  - medium
  - advanced
type: normal
category: must-know
links:
    - >-
        [Why is it safer to keep the tree balanced?](http://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree){website}
parent: removing-keys-from-a-binary-search-tree
---
```

Yields:

```json
{
  "type": "yaml",
  "value": "author: enki\n\nlevels:\n\n  - beginner\n  - basic\n  - medium\n  - advanced\n\ntype: normal\n\ncategory: must-know\n\nlinks:\n    - >-\n        [Why is it safer to keep the tree balanced?](http://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree){website}\n\nparent: removing-keys-from-a-binary-search-tree",
  "data": {
    "parsedValue": {
      "author": "enki",
      "levels": [
        "beginner",
        "basic",
        "medium",
        "advanced"
      ],
      "type": "normal",
      "category": "must-know",
      "links": [
        {
          "name": "Why is it safer to keep the tree balanced?",
          "url": "http://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree",
          "nature": "website"
        }
      ],
      "parent": "removing-keys-from-a-binary-search-tree"
    }
}
```

There can only be `1` [`YAML`](#yaml) metadata node per [`Insight`](#insight). This is checked by the [`yaml`](https://github.com/enkidevs/curriculum-processors/blob/master/packages/curriculum-parser/plugins/insight/validators/yaml.js) validator.

## Question

The question parser is a parser for the content of any [question section](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#questions) ([`Section`](#section)).

### `AnswersList`

`AnswersList` ([`UnistParent`](https://github.com/syntax-tree/unist#parent)) inherits from [`MDASTList`](https://github.com/syntax-tree/mdast/blob/master/readme.md#list).

The `AnswersList` list is the last `MDASTList` in a [question section](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#questions) (when using the [`Insight`](#insight) parser) or last child of [`MDASTRoot`](root) (when using the [`Question`](#question) parser). It is always unordered and is marked with the flag `answers: true`.

The `children` of `AnswersList` is an array of [`AnswersListItem`](#answerslistitem), sorted top-down by correctness.

The number of correct answers equals the number of [`QuestionGaps`](#questiongap) in the `AswerList`'s parent AST.

```idl
interface AnswersList <: Parent {
  type: "list";
  ordered: false;
  start: null;
  loose: true | false;
  answers: true;
}
```

For example, the following markdown:

```md
* Ordered linked list
* Ordered array
* Weighted graph
* Max-heap
```

Yields:

```json
{
  "type": "list",
  "ordered": false,
  "start": null,
  "loose": false,
  "answers": true,
  "children": [
    {
      "type": "listItem",
      "loose": false,
      "checked": null,
      "correct": true,
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Ordered linked list"
            }
          ]
        }
      ],
    },
    {
      "type": "listItem",
      "loose": false,
      "checked": null,
      "correct": false,
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Ordered array"
            }
          ]
        }
      ],
    },
    {
      "type": "listItem",
      "loose": false,
      "checked": null,
      "correct": false,
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Weighted graph"
            }
          ]
        }
      ]
    },
    {
      "type": "listItem",
      "loose": false,
      "checked": null,
      "correct": false,
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "value": "Max-heap"
            }
          ]
        }
      ]
    }
  ]
}
```

### `AnswersListItem`

`AnswersListItem` ([`UnistParent`](https://github.com/syntax-tree/unist#parent)) inherits from [`MDASTListItem`](https://github.com/syntax-tree/mdast/blob/master/readme.md#listitem).

It is a direct child of [`AnswersList`](#answerslist) and does not contain a checkbox.

`AnswersListItem` also has a boolean flag `correct` where `true` means that item is one of the correct answers for an [`AnswersList`](#answerslist) and `false` means it is not.

```idl
interface AnswersListItem <: Parent {
  type: "listItem";
  loose: true | false;
  checked: null;
  correct: true | false;
}
```

For an example, see the definition of [`AnswersList`](#answerslist).


### `Code`

TODO

### `QuestionGap`

`QuestionGap` ([`UnistNode`](https://github.com/syntax-tree/unist#node)) is a custom node specific to Enki Curriculum.

It is created anytime the string `"???"` is encountered.

For example, the following markdown:

```md
???
```

Yields:

```json
{
  "type": "questionGap",
  "value": "???"
}
```

### `QuestionHeadline`

`QuestionHeadline` ([`UnistParent`](https://github.com/syntax-tree/unist#parent)) is a substitute node for a [`MDASTHeading`](https://github.com/syntax-tree/mdast/blob/master/readme.md#heading) of depth 3 within a [question section](https://github.com/enkidevs/curriculum/wiki/Insight-Documentation#questions) ([`Section`](#section)).

```idl
interface QuestionHeadline <: UnistParent {
  type: "questionHeadline";
}
```

For example, the following markdown:

```md
### What is the output of the following script?
```

Yields:

```json
{
  "type": "questionHeadline",
  "children": [
    {
      "type": "text",
      "value": "What is the output of the following script?"
    }
  ]
}
```

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
