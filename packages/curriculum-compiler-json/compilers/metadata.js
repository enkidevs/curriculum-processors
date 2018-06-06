module.exports = function metadata(node) {
  if (!node.data || !node.data.parsedValue) {
    throw new Error('Invalid YAML node')
  }
  return {
    metadata: node.data.parsedValue,
  }
}
