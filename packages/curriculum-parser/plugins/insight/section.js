const unified = require('unified')
const visit = require('unist-util-visit')
const { sectionNames } = require('@enkidevs/curriculum-helpers')

module.exports = function section() {
  return transform

  function transform(ast) {
    const newAstChildren = []
    let section, current, next
    for (let astIndex = 0; astIndex < ast.children.length; astIndex++) {
      current = ast.children[astIndex]
      next = ast.children[astIndex + 1]

      if (
        !(
          current.type === 'thematicBreak' &&
          (next || {}).type === 'heading' &&
          (next || {}).depth === 2
        )
      ) {
        if (section) {
          section.children.push(current)
        } else {
          newAstChildren.push(current)
        }
        continue
      }

      section = {
        type: 'section',
        name: next.children[0].value,
        children: [],
      }

      if (
        [
          sectionNames.REVISION,
          sectionNames.PRACTICE,
          sectionNames.QUIZ,
        ].includes(section.name)
      ) {
        section.question = true
      }

      astIndex += 1 // skip the heading that was included in the section above

      newAstChildren.push(section)
    }

    return Object.assign({}, ast, {
      children: newAstChildren,
    })
  }
}
