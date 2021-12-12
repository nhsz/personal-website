module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
      },
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'next',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@next/next/recommended'
      ],
      rules: {
        'react/prop-types': 'off',
        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',
        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        complexity: [2, 3],
        'max-statements': [2, 8],
        'max-statements-per-line': [2, { max: 1 }],
        'max-nested-callbacks': [2, 2],
        'max-depth': [2, { max: 2 }],
        'prefer-const': 2
      }
    }
  ],
  settings: { react: { version: 'detect' } }
};
