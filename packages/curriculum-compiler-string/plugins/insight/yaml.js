const jsYaml = require('js-yaml');

module.exports = function yaml() {
  const { Compiler } = this;

  if (Compiler) {
    const { visitors } = Compiler.prototype;
    if (visitors) {
      visitors.yaml = function visitYaml(node) {
        if (node.data && node.data.parsedValue) {
          const { links } = node.data.parsedValue;
          if (Array.isArray(links)) {
            node.data.parsedValue.links = links.map(
              link => `[${link.name}](${link.url}){${link.nature}}`
            );
          }
          const yml = jsYaml
            .safeDump(node.data.parsedValue)
            .trim()
            .replace(/\n/g, '\n\n');
          return `---\n${yml}\n---`;
        }
        return undefined;
      };
    }
  }
};
