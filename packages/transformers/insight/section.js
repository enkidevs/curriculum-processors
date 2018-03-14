const unified = require('unified')
const visit = require('unist-util-visit')
const { getCompiler, compilerTypes } = require('../../compiler')
const { parserTypes } = require('../../parser')
const question = require('../question')

module.exports = function section () {
  const { Compiler } = this

  if (Compiler) {
    const { visitors } = Compiler.prototype
    if (visitors) {
      visitors.section = function (node) {
        const thematicBreak = {
          type: 'thematicBreak'
        }
        const heading = {
          type: 'heading',
          depth: 2,
          children: [
            {
              type: 'text',
              value: node.name
            }
          ]
        }
        const compiler = getCompiler(parserTypes.INSIGHT, compilerTypes.STRING)
        return compiler.compileSync({
          type: 'root',
          children: [thematicBreak, heading, ...node.children]
        })
      }
    }
  }

  return transform

  function transform (ast) {
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
        children: []
      }

      astIndex += 1 // skip the heading that was included in the section above

      newAstChildren.push(section)
    }

    return {
      ...ast,
      children: newAstChildren
    }
  }
}
