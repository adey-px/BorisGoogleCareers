/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/script-indent": ["error", { baseIndent: 1 }],
    "vue/style-indent": ["error", { baseIndent: 1 }],
    "prettier/prettier": ["error", { endOfLine: "off" }],
  },
};


// Set rules section 