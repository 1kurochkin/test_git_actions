module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    "allure-report",
    "allure-results",
    "screenshots",
    ".eslintrc.js",
  ],
  extends: ["eslint:recommended", "plugin:cypress/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "err|runnable" }],
    semi: ["warn", "always"],
    "cypress/no-unnecessary-waiting": "off",
    "no-trailing-spaces": ["warn", { skipBlankLines: true }],
    "block-spacing": "error",
    curly: "error",
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0, maxBOF: 0 }],
    "padded-blocks": ["warn", "never"],
    "space-in-parens": ["warn", "never"],
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "prefer-const": "warn",
    "max-len": ["error", { code: 140, tabWidth: 4, ignoreStrings: true }],
  },
};
