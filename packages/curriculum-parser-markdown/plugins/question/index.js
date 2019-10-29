const questionAnswers = require('./answers');
const questionCode = require('./code');
const questionGap = require('./gap');
const questionHeadline = require('./headline');
const validators = require('./validators');

module.exports = [
  questionHeadline,
  questionGap,
  questionCode,
  questionAnswers,
  ...validators,
];
