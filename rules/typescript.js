module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  extends: 'plugin:@typescript-eslint/recommended',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    '@typescript-eslint/class-methods-use-this': 'warn',
    '@typescript-eslint/consistent-generic-constructors': [
      'warn',
      'type-annotation',
    ],
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-return': 'warn',
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/dot-notation': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'explicit' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/init-declarations': ['warn', 'always'],
    '@typescript-eslint/max-params': [
      'warn',
      {
        max: 10,
      },
    ],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/method-signature-style': ['warn', 'method'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-array-delete': 'warn',
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-extraneous-class': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-invalid-this': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/no-loop-func': 'warn',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-restricted-imports': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-template-expression': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-unsafe-function-type': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-unary-minus': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/only-throw-error': 'warn',
    '@typescript-eslint/parameter-properties': 'warn',
    '@typescript-eslint/prefer-destructuring': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-find': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-promise-reject-errors': 'warn',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/typedef': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn',
  },
};
