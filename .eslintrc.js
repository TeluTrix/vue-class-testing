module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["prettier", "@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    "no-unused-vars": "error",
  },
  ignorePatterns: ["dist"],
};
