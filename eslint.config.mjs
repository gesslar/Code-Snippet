import js from "@eslint/js"
// https://www.npmjs.com/package/eslint-plugin-jsdoc
// import jsdoc from "eslint-plugin-jsdoc";
import stylisticJs from "@stylistic/eslint-plugin-js"
import plugin from "@stylistic/eslint-plugin-js";

export default [
  js.configs.recommended,
  // jsdoc.configs['flat/recommended'],
  {
    name: "bmw/tmx/languageOptions",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
          $sp: "readonly",
          AbstractAjaxProcessor: "readonly",
          Class: "readonly",
          console: "readonly",
          document: "readonly",
          DurationCalculator: "readonly",
          g_form: "readonly",
          GlideAggregate: "readonly",
          GlideappVariablePoolQuestionSet: "readonly",
          GlideDateTime: "readonly",
          GlideElement: "readonly",
          GlideEncrypter: "readonly",
          GlidePluginManager: "readonly",
          GlideRecord: "readonly",
          GlideRecordSecure: "readonly",
          GlideScopedEvaluator: "readonly",
          GlideSysAttachment: "readonly",
          global: "readonly",
          gs: "readonly",
          JSUtil: "readonly",
          MutationObserver: "readonly",
          sn_auth: "readonly",
          sn_fd: "readonly",
          sn_ws_err: "readonly",
          sn_ws: "readonly",
          TMXCrisisUtils: "readonly",
          window: "readonly",
          Workflow: "readonly",
          // Scopes
          x_tmxgt_botty: "readonly",
          x_tmxgt_code: "readonly",
          x_tmxgt_etd: "readonly",
      },
    },
  },
  {
    name: "bmw/tmx/lints",
    files: ["**/*.js"],
    plugins: {
      "@stylistic/js": stylisticJs,
      // jsdoc: jsdoc,
      plugin,
    },
    rules: {
      "@stylistic/js/arrow-parens": ["error", "as-needed"],
      "@stylistic/js/arrow-spacing": ["error", { before: true, after: true }],
      // Ensure control statements and their bodies are not on the same line
      "@stylistic/js/brace-style": ["error", "1tbs", {allowSingleLine: false}],
      "@stylistic/js/padding-line-between-statements": [
        "error",
        {blankLine: "always", prev: "if", next: "*"},
        {blankLine: "always", prev: "for", next: "*"},
        {blankLine: "always", prev: "while", next: "*"},
        {blankLine: "always", prev: "do", next: "*"},
        {blankLine: "always", prev: "switch", next: "*"}
      ],
      "@stylistic/js/eol-last": ["error", "always"],
      "@stylistic/js/indent": ["error", 2, {
        SwitchCase: 1 // Indents `case` statements one level deeper than `switch`
      }],
      "@stylistic/js/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "@stylistic/js/keyword-spacing": ["error", {
        before: false,
        after: true,
        overrides: {
          // Control statements
          return:  { before: true, after: true },
          if:      { after: false },
          else:    { before: true, after: true },
          for:     { after: false },
          while:   { after: false },
          do:      { after: true },
          switch:  { after: false },
          case:    { before: true, after: true },
          throw:   { before: true, after: false } ,

          // Keywords
          as:      { before: true, after: true },
          of:      { before: true, after: true },
          in:      { before: true, after: true },
          from:    { before: true, after: true },
          async:   { before: true, after: true },
          await:   { before: true, after: false },
          class:   { before: true, after: true },
          const:   { before: true, after: true },
          let:     { before: true, after: true },
          var:     { before: true, after: true },

          // Exception handling
          catch:   { before: true, after: false },
          finally: { before: true, after: true },
        }
      }],
      "@stylistic/js/no-tabs": "error",
      "@stylistic/js/no-trailing-spaces": ["error"],
      "@stylistic/js/object-curly-spacing": ["error", "never", {
        objectsInObjects: false,
        arraysInObjects: false
      }],
      "@stylistic/js/quotes": ["error", "double", {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
      "@stylistic/js/semi": "error",
      "@stylistic/js/space-before-function-paren": ["error", "never"],
      "@stylistic/js/yield-star-spacing": ["error", { before: true, after: false }],
      "constructor-super": "error",
      "no-unexpected-multiline": "error",
      "no-unused-vars": ["error", {
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_+",
        argsIgnorePattern: "^_+",
        destructuredArrayIgnorePattern: "^_+",
        varsIgnorePattern: "^_+"
      }],
      "no-useless-assignment": "error",
      // JSDoc
      // "jsdoc/tag-lines": ["error", "any",{"startLines":1}],
      // "jsdoc/require-description": "error",
    },
  }
]
