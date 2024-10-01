module.exports = {
  extends: [
    './rules/node',
    './rules/import',
    './rules/styles',
    './rules/prettier',
  ].map(require.resolve),
  parserOptions: { sourceType: 'module' },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['lib/**/*', 'node_modules/**/*'],
  overrides: [
    {
      files: '*.ts',
      extends: './rules/typescript',
    },
  ],
};
