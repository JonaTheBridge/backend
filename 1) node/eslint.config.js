import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // 'import/extensions': [ error, { js: 'ignorePackages' } ],
      'linebreak-style': 0,
      'no-underscore-dangle': 0,
      semi: ['error', 'always',],
      eqeqeq: ['error', 'always',],
      quotes: ['error', 'single',],
      indent: ['error', 2, { 'SwitchCase': 1, },],
      'prefer-const': 'error',
      'no-var': 'error',
      'array-bracket-spacing': 'error',
      'space-in-parens': 'error',
      'spaced-comment': 'error',
      'no-trailing-spaces': 'error',
      'no-console': 'warn',
      'comma-dangle': ['error', {
        'arrays': 'always',
        'objects': 'always',
      },],
    },
  }
];