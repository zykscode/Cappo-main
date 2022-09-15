module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'next', 
    'next/core-web-vitals',
    'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {'prettier/prettier': ['error', { endOfLine: 'auto' }],
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 0,
  'no-unused-vars': 0,
  'react/no-unescaped-entities': 0,
  "react/no-unknown-property": "off",
  
  },
};
