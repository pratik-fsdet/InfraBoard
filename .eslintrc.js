module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },
};
