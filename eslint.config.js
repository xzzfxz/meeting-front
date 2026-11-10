import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tsEslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      quotes: ["error", "double"],
      "vue/multi-word-component-names": "off",
      "vue/singleline-html-element-content-newline": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "vue/valid-template-root": "off",
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/html-closing-bracket-newline": [
        "error",
        {
          singleline: "never",
          multiline: "always",
        },
      ],
    },
  },
]);
