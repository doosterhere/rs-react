module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-compiler'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
