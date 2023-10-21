/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        indent: [1, 4],
        semi: [1, "always"],
        quotes: [1, "double"],
        "no-debugger": [0]
    }
};