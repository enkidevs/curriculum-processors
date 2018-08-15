const { safeDump } = require('js-yaml')
const unistBuilder = require('unist-builder')

module.exports.parseSync = function parseSync(json) {
  return parseJson(json)
}
module.exports.parse = async function parse(json) {
  return parseJson(json)
}

function parseJson(json) {
  if (!json.metadata) {
    throw new Error('Missing required [yaml] node')
  }

  // https://github.com/nodeca/js-yaml#safedump-object---options-
  // note that some whitespace is NOT preserved by the default settings
  const value = safeDump(json.metadata)

  return unistBuilder('yaml', {
    value,
    data: {
      parsedValue: json.metadata,
    },
  })
}
