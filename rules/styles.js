module.exports = {
  rules: {
    'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
    'logical-assignment-operators': [
      'warn',
      'always',
      { enforceForIfStatements: false },
    ],
    'no-constant-binary-expression': 'warn',
    'no-empty-static-block': 'error',
    'no-nested-ternary': 'warn',
    'no-new-native-nonconstructor': 'error',
    'no-object-constructor': 'warn',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['warn'],
    'prefer-object-has-own': 'warn',
  },
};
