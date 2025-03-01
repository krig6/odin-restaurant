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
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": "error",
      "comma-dangle": ["error", "never"],
      "consistent-return": "error",
      "no-unused-vars": "off",
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "import", "next": "*" }
      ],
      "eol-last": ["error", "always"]
    }
  }
];
