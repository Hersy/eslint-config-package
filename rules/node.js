module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'airbnb-base'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts'],
      },
    },
  },
};
