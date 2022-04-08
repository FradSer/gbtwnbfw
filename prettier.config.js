module.exports = {
  parser: 'typescript',
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  overrides: [
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
  ],
}
