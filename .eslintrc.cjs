/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    'no-debugger': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: ['error', 'single'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: { max: 4 },
        multiline: { max: 1 }
      }
    ]
  }
}
