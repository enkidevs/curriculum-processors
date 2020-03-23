const unistBuilder = require('unist-builder');
const unistAssert = require('unist-util-assert');
const { getCompiler } = require('@enkidevs/curriculum-compiler-string');
const { contentTypes } = require('@enkidevs/curriculum-helpers');

const markdownCompiler = getCompiler(contentTypes.MARKDOWN);
const insightCompiler = getCompiler(contentTypes.INSIGHT);
const questionCompiler = getCompiler(contentTypes.QUESTION);

function getAstCompiler(compiler) {
  return function compileNode(node) {
    if (!node.type) {
      node.type = 'root';
    }
    unistAssert(node);
    return compiler.compileSync(unistBuilder('root', node.children));
  };
}

const compileNodeToMarkdown = getAstCompiler(markdownCompiler);
const compileNodeToInsightMarkdown = getAstCompiler(insightCompiler);
const compileNodeToQuestionMarkdown = getAstCompiler(questionCompiler);

function getAnswersFromNode(node) {
  const answersASTList = node.children.find(
    (child) => child.type === 'list' && child.answers
  );
  if (!answersASTList || !answersASTList.children) {
    throw new Error('No valid answer list in question node');
  }

  let tempCorrectIndex = 0;
  return answersASTList.children.map((answerNode) => ({
    text: compileNodeToMarkdown(answerNode).replace('\n', ''),
    correct: answerNode.correct,
    // eslint-disable-next-line no-plusplus
    correctIndex: answerNode.correct ? tempCorrectIndex++ : null,
  }));
}

module.exports = {
  compileNodeToMarkdown,
  compileNodeToQuestionMarkdown,
  compileNodeToInsightMarkdown,
  getAnswersFromNode,
};
