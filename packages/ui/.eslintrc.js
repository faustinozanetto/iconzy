const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: ['custom'],
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['src/*.ts', 'src/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: [
        'plugin:tailwindcss/recommended',
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        project: 'packages/ui/tsconfig.json',
        parser: '@typescript-eslint/parser',
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'no-empty-pattern': 'off',
        'consistent-return': 'off',
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
});
