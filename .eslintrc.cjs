/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globals/recomended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/script-indent': ['error', { baseIndent: 1 }],
    'vue/style-indent': ['error', { baseIndent: 1 }],
    'prettier/prettier': ['error', { endOfLine: 'off' }],
  },
  env: {
    'vitest-globals/env': true,
  },
};

// Set rules section
/* - Add plugin in line 10, and env in line 20
  Both needed for eslint work with vitest
*/
