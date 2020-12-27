module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  rules: {
    // Add or overwrite specific rules.
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'arrow-parens': ['error'],
    'import/prefer-default-export': ['off'],
    'no-param-reassign': ['warn'],
    'no-unused-vars': ['warn'],
    'react/jsx-first-prop-new-line': ['off', 'multiline'],
    'react/jsx-max-props-per-line': ['off', { maximum: 1 }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/ignore': ['types'],
    react: {
      version: 'detect',
    },
  },
};
