import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      'import/resolver': {
        webpack: {
          config: 'webpack.dev.js',
        },
      },
    },
    rules: {
      'object-curly-newline': [
        'error',
        {
          'ImportDeclaration': { 'multiline': true, }
        }
      ],
      'no-restricted-imports': ['error', 'underscore'],
      'eqeqeq': 'error',
      'no-console': 'off',
      'consistent-return': 'error',
      'no-unused-vars': 'off',
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'padding-line-between-statements': [
        'error',
        { 'blankLine': 'always', 'prev': 'import', 'next': '*' }
      ],
      'eol-last': ['error', 'always']
    },
  },
];
