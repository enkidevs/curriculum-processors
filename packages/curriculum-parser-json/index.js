const { sectionNames, contentTypes } = require('@enkidevs/curriculum-helpers');
const unistBuilder = require('unist-builder');
const { headline, section, yaml } = require('./parsers');

function getParser(type) {
  if (![contentTypes.INSIGHT, contentTypes.EXERCISE].includes(type)) {
    throw new Error(`Unsupported parser type [${type}] requested`);
  }

  return {
    parse,
    parseSync,
  };
}

async function parse(json) {
  const children = await buildChildren(json);
  return createAst(children);
}

function parseSync(json) {
  const children = buildChildrenSync(json);
  return createAst(children);
}

function createAst(children) {
  return unistBuilder('root', children);
}

function getSectionNames(json) {
  return Object.values(sectionNames)
    .filter((name) => !['Game Content'].includes(name))
    .map((sectionName) => sectionName.toLowerCase())
    .filter((sectionName) => Boolean(json[sectionName]));
}

function buildChildrenSync(json) {
  return [
    yaml.parseSync(json),
    headline.parseSync(json),
    ...getSectionNames(json).map((sectionName) => {
      const sectionParser = getSectionParser(sectionName);
      return sectionParser.parseSync(sectionName, json[sectionName]);
    }),
  ];
}

async function buildChildren(json) {
  return Promise.all([
    yaml.parse(json),
    headline.parse(json),
    ...getSectionNames(json).map((sectionName) => {
      const sectionParser = getSectionParser(sectionName);
      return sectionParser.parse(sectionName, json[sectionName]);
    }),
  ]);
}

function getSectionParser(name) {
  switch (name) {
    case sectionNames.PRACTICE.toLowerCase():
    case sectionNames.REVISION.toLowerCase():
    case sectionNames.QUIZ.toLowerCase():
      return section.question;
    default:
      return section[name];
  }
}

module.exports = {
  getParser,
};
