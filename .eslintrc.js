// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    "standard",
    "plugin:vue/recommended"
  ],
  rules: {
    'space-before-function-paren': 0
  }
}
