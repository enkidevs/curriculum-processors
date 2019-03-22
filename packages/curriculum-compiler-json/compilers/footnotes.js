const { compileNodeToMarkdown } = require('./helpers');

module.exports = function footnotes(node) {
  const rawText = compileNodeToMarkdown(node);
  const items = parseRawFootnotes(rawText);
  return {
    footnotes: {
      rawText,
      items,
    },
  };
};

function parseRawFootnotes(text) {
  const splitTextArray = text.split(/(\[.*:.*\])/gi).filter(Boolean);
  // eslint-disable-next-line max-params
  return splitTextArray.reduce((items, line, index, array) => {
    if (index % 2 === 1) {
      return items;
    }
    const footnoteHeadlineRegExp = /[[0-9]:.*\]/i;
    const nextLine = array[index + 1];
    if (
      !line.match(footnoteHeadlineRegExp) ||
      nextLine.match(footnoteHeadlineRegExp)
    ) {
      throw new Error('Cannot parse invalid footnotes');
    }
    const [number, name] = line.substring(1, line.length - 1).split(':');
    return items.concat({
      number,
      name,
      text: nextLine,
    });
  }, []);
}
