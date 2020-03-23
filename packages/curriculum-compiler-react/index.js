const React = require('react');
const unified = require('unified');
const unistNode = require('unist-builder');
const mdastToHast = require('mdast-util-to-hast');
const map = require('unist-util-map');
const remarkRehype = require('remark-rehype');
const hastToHyperscript = require('hast-to-hyperscript');

const fallback = {
  QuestionCode: 'code',
};

module.exports.getCompiler = function getCompiler(type, components = {}) {
  function compileSync(ast) {
    const processor = unified()
      .use(questionHeadline)
      .use(questionGap)
      .use(questionCode)
      .use(questionAnswers)
      .use(remarkRehype);

    const hast = processor.runSync(ast);
    return hastToHyperscript(h, hast, 'enki-');
  }
  return {
    compileSync,
  };

  function h(name, props, children) {
    const component = components[name] || fallback[name] || name;
    return React.createElement(component, props, children);
  }
};

function questionHeadline() {
  return transform;

  function transform(ast) {
    return map(ast, (node) => {
      if (node.type === 'questionHeadline') {
        return {
          ...node,
          data: {
            hName: 'QuestionHeadline',
            hChildren: node.children.map(mdastToHast),
          },
        };
      }
      return node;
    });
  }
}

function questionCode() {
  return transform;

  function transform(ast) {
    return map(ast, (node) => {
      if (node.type === 'questionCode') {
        return {
          ...node,
          data: {
            hName: 'QuestionCode',
            hChildren: Array.isArray(node.children)
              ? node.children.map(questionCodeLine)
              : [],
          },
        };
      }

      return node;
    });
  }

  function questionCodeLine(line) {
    return mdastToHast({
      ...line,
      data: {
        hName: 'QuestionCodeLine',
        hChildren: Array.isArray(line.children)
          ? line.children.map(questionCodeSegmentOrGap)
          : [],
      },
    });
  }

  function questionCodeSegmentOrGap(node) {
    return mdastToHast({
      ...node,
      ...(node.type === 'questionCodeSegment'
        ? {
            data: {
              hName: 'QuestionCodeSegment',
              hChildren: [unistNode('text', node.value)],
            },
          }
        : {}),
    });
  }
}

function questionGap() {
  return transform;

  function transform(ast) {
    return map(ast, (node) => {
      if (node.type === 'questionGap') {
        return {
          ...node,
          data: {
            hName: 'QuestionGap',
            hChildren: [unistNode('text', node.value)],
          },
        };
      }

      return node;
    });
  }
}

function questionAnswers() {
  return transform;

  function transform(ast) {
    return map(ast, (node) => {
      if (node.type === 'list' && node.answers) {
        const answers = {
          ...node,
          data: {
            hName: 'QuestionAnswers',
            hChildren: node.children.map((answer) =>
              mdastToHast({
                ...answer,
                data: {
                  hName: 'QuestionAnswer',
                  hProperties: {
                    correct: answer.correct,
                  },
                  hChildren: answer.children.map(mdastToHast),
                },
              })
            ),
          },
        };
        return answers;
      }
      return node;
    });
  }
}
