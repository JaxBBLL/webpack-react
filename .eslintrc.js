module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
    'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
    'space-before-function-paren': 0,
    semi: 0,
    quotes: 0,
    'comma-dangle': 0,
    'quote-props': 0
  }
}
