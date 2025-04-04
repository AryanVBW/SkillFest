module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    'public/*'
  ]
}