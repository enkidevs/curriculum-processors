const fs = require('fs')
const path = require('path')

const folderNames = folderPath =>
  fs
    .readdirSync(folderPath)
    .filter(name => fs.statSync(path.join(folderPath, name)).isDirectory())

const fixturePath = folderPath =>
  path.join(folderPath, 'fixtures')

module.exports.loadFixtures = function loadFixtures (folderPath) {
  const fp = fixturePath(folderPath)
  const names = folderNames(fp).filter(
    name => name !== 'error'
  )
  const fixtures = names.map(folderName =>
    module.exports.loadFixture(path.join(fp, folderName))
  )
  return fixtures
}

function loadFile (folderPath = '', name = '') {
  try {
    const fullPath = path.join(folderPath, name)
    return fs.readFileSync(fullPath, 'utf8')
  } catch (e) {
    return null
  }
}

module.exports.loadErrorFixture = function loadErrorFixture (folderPath, fileName) {
  const fp = path.join(fixturePath(folderPath), 'error', fileName)
  return { text: loadFile(fp) }
}

module.exports.loadFixture = function loadFixture (fp) {
  const output = {}
  const textFile = loadFile(fp, 'text.md')
  if (textFile) {
    output.text = textFile.toString()
  }
  const astFile = loadFile(fp, 'ast.json')
  if (astFile) {
    output.ast = JSON.parse(astFile)
  }
  const stringifiedFile = loadFile(fp, 'stringified.md')
  if (stringifiedFile) {
    output.stringified = stringifiedFile.toString()
  }
  return output
}

module.exports.toJSON = function toJSON (obj) {
  return JSON.parse(JSON.stringify(obj))
}
