module.exports = function questionGap() {
  inlineTokenizer.locator = locator;

  const { Parser } = this;

  // Inject inlineTokenizer
  const { inlineTokenizers, inlineMethods } = Parser.prototype;
  inlineTokenizers.questionGap = inlineTokenizer;
  inlineMethods.splice(0, 0, 'questionGap');

  function locator(value, fromIndex) {
    return value.indexOf('???', fromIndex);
  }

  function inlineTokenizer(eat, value, silent) {
    const match = /^\?{3}/.exec(value);

    if (silent) return silent;
    if (!match) return undefined;

    const [gap] = match;

    return eat(gap)({
      type: 'questionGap',
      value: gap,
    });
  }
};
