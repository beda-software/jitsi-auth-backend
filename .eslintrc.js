module.exports = {
  env: {
    browser: true,
  },
  root: true,
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  globals: {
    node: true,
  },
  rules: {
    'prettier/prettier': 0,
    'no-restricted-imports': ['error', { patterns: ['aidbox-react/src'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};
