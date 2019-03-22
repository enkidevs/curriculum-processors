module.exports = {
  testRegex: '.*/__tests__/.*\\.test.js$',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/dist/**',
    '!**/__tests__/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*sandbox.js',
  ],
};
