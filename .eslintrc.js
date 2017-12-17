// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  rules: {
    'space-before-function-paren': 0
  }
}
