import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [

  {
    files: ["eslint.config.mjs"],
    rules: {
      quotes: ["error", "double"],
    },
  },
  {
    ignores: ["eslint.config.mjs"],
    languageOptions: { globals: globals.browser },
    settings: {
      "import/resolver": {
        webpack: {
          config: "webpack.dev.js"
        }
      }
    },
    rules: {
      "object-curly-newline": [
        "error",
        {
          "ImportDeclaration": { "multiline": true }
        }
      ],
      "no-restricted-imports": ["error", "underscore"],
      "eqeqeq": "error",
      "comma-dangle": ["error", "never"],
      "consistent-return": "error",
      "no-unused-vars": "off",
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "eol-last": ["error", "always"]
    }
  }
];
