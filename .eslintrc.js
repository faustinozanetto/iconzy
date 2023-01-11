// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'no-empty-pattern': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
  },
});
