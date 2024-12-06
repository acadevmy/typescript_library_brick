// @ts-check
const tseslint = require("typescript-eslint");
const devmy = require("@devmy/eslint-plugin");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {"devmy": devmy},
    extends: [devmy.configs["recommended"]],
  },
);