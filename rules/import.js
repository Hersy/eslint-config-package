module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import-name/recommended'],
  plugins: ['unused-imports'],
  rules: {
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-empty-named-blocks': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['external', 'internal', 'unknown'],
        pathGroups: [
          {
            pattern: '@assets/**',
            group: 'unknown',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import-name/all-imports-name': [
      'warn',
      { classnames: 'classNames', 'prop-types': 'PropTypes' },
    ],
    'import-name/common-import-name': [
      'warn',
      { classnames: 'classNames', 'prop-types': 'PropTypes' },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-imports-ts': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
