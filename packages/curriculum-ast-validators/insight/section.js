const visit = require('unist-util-visit');
const { sectionNames } = require('@enkidevs/curriculum-helpers');

const validSectionNames = Object.values(sectionNames);
const validSectionNamesSet = new Set(validSectionNames);

module.exports = function validateSection(ast) {
  visit(ast, 'section', ({ name }) => {
    if (!validSectionNamesSet.has(name)) {
      throw new Error(
        `Section name "${name}" is invalid. Only valid options are ["${validSectionNames.join(
          '", "'
        )}"]`
      );
    }
  });
};
