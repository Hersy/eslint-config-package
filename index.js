import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import cssPlugin from '@eslint/css';
import jsPlugin from '@eslint/js';
import jsonPlugin from '@eslint/json';
import markdownPlugin from '@eslint/markdown';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import importNamePlugin from 'eslint-plugin-import-name';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import rules from './rules/index.js';

const {
  babelRules,
  cssRules,
  errorRules,
  importNameRules,
  importRules,
  jsdocRules,
  jsonRules,
  nodeRules,
  standardRules,
  styleRules,
  stylisticRules,
  typescriptRules,
  unicornRules,
  unusedImportRules,
} = rules;

const files = ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'];

const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
};

export default [
  { ignores: ['lib/**/*', 'node_modules/**/*'] },
  {
    files,
    plugins: { js: jsPlugin },
    languageOptions,
    rules: {
      ...standardRules,
      ...errorRules,
      ...styleRules,
    },
  },
  {
    files,
    languageOptions,
    plugins: { jsdoc: jsdocPlugin },
    rules: jsdocRules,
  },
  {
    files,
    languageOptions,
    plugins: { n: nodePlugin },
    rules: nodeRules,
  },
  {
    files,
    plugins: { '@babel': babelPlugin },
    languageOptions: {
      ...languageOptions,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@hersy/babel-preset'],
        },
      },
    },
    rules: babelRules,
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      ...languageOptions,
      ecmaFeatures: { jsx: true },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        lib: ['DOM', 'ESNext'],
      },
    },
    rules: typescriptRules,
  },
  {
    files,
    languageOptions,
    plugins: { import: importPlugin },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: ['**/tsconfig.json'],
        },
      },
      'import/ignore': [
        'node_modules',
        String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`,
      ],
    },
    rules: importRules,
  },
  {
    files,
    languageOptions,
    plugins: { 'import-name': importNamePlugin },
    rules: importNameRules,
  },
  {
    files,
    languageOptions,
    plugins: { 'unused-imports': unusedImportPlugin },
    rules: unusedImportRules,
  },
  {
    files,
    languageOptions: { globals: globals.builtin },
    plugins: { unicorn: unicornPlugin },
    rules: unicornRules,
  },

  {
    files,
    languageOptions,
    plugins: { '@stylistic': stylisticPlugin },
    rules: stylisticRules,
  },
  {
    files: ['**/*.json'],
    plugins: { json: jsonPlugin },
    language: 'json/json',
    rules: jsonRules,
  },
  {
    files: ['**/*.css'],
    plugins: { css: cssPlugin },
    language: 'css/css',
    rules: cssRules,
  },
  ...markdownPlugin.configs.recommended,
];
