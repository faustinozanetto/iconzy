const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: ['custom'],
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'no-empty-pattern': 'off',
        'consistent-return': 'off',
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
});
