const { sectionNames } = require('@enkidevs/curriculum-helpers');

module.exports = function section() {
  return transform;

  function transform(ast) {
    const newAstChildren = [];
    let sec;
    let current;
    let next;
    for (let astIndex = 0; astIndex < ast.children.length; astIndex += 1) {
      current = ast.children[astIndex];
      next = ast.children[astIndex + 1];

      if (
        !(
          current.type === 'thematicBreak' &&
          (next || {}).type === 'heading' &&
          (next || {}).depth === 2
        )
      ) {
        if (sec) {
          sec.children.push(current);
        } else {
          newAstChildren.push(current);
        }
        // eslint-disable-next-line no-continue
        continue;
      }

      sec = {
        type: 'section',
        name: next.children[0].value,
        children: [],
      };

      if (
        [
          sectionNames.REVISION,
          sectionNames.PRACTICE,
          sectionNames.QUIZ,
        ].includes(sec.name)
      ) {
        sec.question = true;
      }

      astIndex += 1; // skip the heading that was included in the section above

      newAstChildren.push(sec);
    }

    return Object.assign({}, ast, {
      children: newAstChildren,
    });
  }
};
