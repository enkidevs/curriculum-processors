const { contentTypes } = require('@enkidevs/curriculum-helpers');
const insight = require('./insight');
const question = require('./question');

const questionValidator = { ...question };

const insightValidator = {
  ...insight,
  question: questionValidator,
};

const questionSafeValidator = Object.keys(questionValidator).reduce(
  (hash, validationName) => {
    const validation = questionValidator[validationName];
    hash[validationName] = function safeValidationWrapper(...args) {
      try {
        validation(...args);
        return null;
      } catch (error) {
        return error;
      }
    };
    return hash;
  },
  {}
);

const insightSafeValidator = Object.keys(insightValidator).reduce(
  (hash, validationName) => {
    // skip already setup question validator
    if (validationName !== 'question') {
      const validation = insightValidator[validationName];
      hash[validationName] = function safeValidationWrapper(...args) {
        try {
          validation(...args);
          return null;
        } catch (error) {
          return error;
        }
      };
    }
    return hash;
  },
  {
    question: questionSafeValidator,
  }
);

module.exports = {
  validate: (type) => {
    switch (type) {
      case contentTypes.INSIGHT:
        return (ast) =>
          Object.values(insightValidator).forEach((validator) => {
            if (typeof validator === 'function') {
              validator(ast);
            } else {
              Object.values(validator).forEach((nestedValidator) => {
                nestedValidator(ast);
              });
            }
          });
      case contentTypes.QUESTION:
        return (ast) =>
          Object.values(questionValidator).forEach((validator) => {
            validator(ast);
          });
      default:
        return () => [];
    }
  },
  validateSafe: (type) => {
    switch (type) {
      case contentTypes.INSIGHT:
        return (ast) =>
          Object.values(insightSafeValidator).reduce((errors, validator) => {
            if (typeof validator === 'function') {
              const error = validator(ast);
              if (error) {
                errors.push(error);
              }
            } else {
              Object.values(validator).forEach((nestedValidator) => {
                const error = nestedValidator(ast);
                if (error) {
                  errors.push(error);
                }
              });
            }
            return errors;
          }, []);
      case contentTypes.QUESTION:
        return (ast) =>
          Object.values(questionSafeValidator).reduce((errors, validator) => {
            const error = validator(ast);
            if (error) {
              errors.push(error);
            }
            return errors;
          }, []);
      default:
        return () => [];
    }
  },
  getValidator: (type) => {
    switch (type) {
      case contentTypes.INSIGHT:
        return insightValidator;
      case contentTypes.QUESTION:
        return questionValidator;
      default:
        return () => [];
    }
  },
  getSafeValidator: (type) => {
    switch (type) {
      case contentTypes.INSIGHT:
        return insightSafeValidator;
      case contentTypes.QUESTION:
        return questionSafeValidator;
      default:
        return () => [];
    }
  },
};
