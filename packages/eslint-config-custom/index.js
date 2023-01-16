const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  // Configuration for JavaScript files
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
});
