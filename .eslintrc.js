module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    'browser': true,
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      }
    ],
    'react/prop-types': 'off',
  }
};
