const {
  contentTypes,
  sectionNames,
  questionTypes,
} = require('@enkidevs/curriculum-helpers');
const compilers = require('./compilers');

const { compileNodeToInsightMarkdown } = compilers.helpers;

const nodeSectionMap = {
  [sectionNames.CONTENT]: (node) => compilers.content(node),
  [sectionNames.GAME_CONTENT]: (node) => ({
    gameContent: compileNodeToInsightMarkdown(node),
  }),
  [sectionNames.PRACTICE]: (node) =>
    compilers.question(node, questionTypes.PRACTICE),
  [sectionNames.REVISION]: (node) =>
    compilers.question(node, questionTypes.REVISION),
  [sectionNames.EXERCISE]: (node) => compilers.exercise(node),
  [sectionNames.QUIZ]: (node) => compilers.quiz(node),
  [sectionNames.FOOTNOTES]: (node) => compilers.footnotes(node),
};

const nodeTypeMap = {
  yaml: (node) => compilers.metadata(node),
  headline: (node) => compilers.headline(node),
  section: (node) => {
    if (!node.name) {
      throw new Error(`Invalid section node with no name`);
    }
    const compiler = nodeSectionMap[node.name];
    if (!compiler) {
      throw new Error(`Cannot compile section node with name ${node.name}`);
    }
    return compiler(node);
  },
};

function compileSection(node) {
  if (!node || !node.type) {
    throw new Error('Invalid node with no type');
  }
  const compiler = nodeTypeMap[node.type];
  if (!compiler) {
    throw new Error(`Cannot compile node with invalid type ${node.type}`);
  }
  return compiler(node);
}

function validateAst(ast) {
  if (!ast || !Array.isArray(ast.children)) {
    throw new Error('Missing or invalid AST');
  }
}

function compileInsight(ast) {
  validateAst(ast);

  const json = ast.children.reduce(
    (tempJson, node) => ({ ...tempJson, ...compileSection(node) }),
    {}
  );
  return json;
}

function compileGlossary(ast) {
  validateAst(ast);

  return compilers.glossary(ast);
}

function compileQuestion(ast) {
  validateAst(ast);

  // Don't mutate parameter
  const questionAst = { ...ast };

  const [heading] = questionAst.children.splice(
    questionAst.children.findIndex((node) => node.type === 'heading'),
    1
  );

  const name = heading.children[0].value;

  // Wrap question-type ast in section node data
  questionAst.name = name;
  questionAst.type = 'section';
  questionAst.question = true;

  const json = compilers.question(questionAst, name.toLowerCase());

  return json;
}

function getCompiler(type) {
  switch (type) {
    case contentTypes.EXERCISE:
    case contentTypes.INSIGHT: {
      return {
        compileSync: compileInsight,
      };
    }
    case contentTypes.QUESTION: {
      return {
        compileSync: compileQuestion,
      };
    }
    case contentTypes.GLOSSARY: {
      return {
        compileSync: compileGlossary,
      };
    }
    default:
      throw Error(`Unsupported type "${type}"`);
  }
}

module.exports = {
  getCompiler,
};
