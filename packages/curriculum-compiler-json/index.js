const {
  contentTypes,
  sectionNames,
  questionTypes,
} = require('@enkidevs/curriculum-helpers');
const compilers = require('./compilers');

const {
  compileNodeToMarkdown,
  compileNodeToInsightMarkdown,
} = compilers.helpers;

const nodeSectionMap = {
  [sectionNames.CONTENT]: node => ({
    content: compileNodeToMarkdown(node),
  }),
  [sectionNames.GAME_CONTENT]: node => ({
    gameContent: compileNodeToInsightMarkdown(node),
  }),
  [sectionNames.PRACTICE]: node =>
    compilers.question(node, questionTypes.PRACTICE),
  [sectionNames.REVISION]: node =>
    compilers.question(node, questionTypes.REVISION),
  [sectionNames.QUIZ]: node => compilers.quiz(node),
  [sectionNames.FOOTNOTES]: node => compilers.footnotes(node),
};

const nodeTypeMap = {
  yaml: node => compilers.metadata(node),
  headline: node => compilers.headline(node),
  section: node => {
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

function compileInsight(ast) {
  if (!ast || !ast.children) {
    throw new Error('Missing or invalid AST');
  }
  const json = ast.children.reduce(
    (tempJson, node) => Object.assign({}, tempJson, compileSection(node)),
    {}
  );
  return json;
}

function getCompiler(type) {
  let compileSync;
  switch (type) {
    case contentTypes.INSIGHT: {
      compileSync = compileInsight;
      break;
    }
    default:
      throw Error(`Unsupported type "${type}"`);
  }

  return {
    compileSync,
  };
}

module.exports = {
  getCompiler,
};
