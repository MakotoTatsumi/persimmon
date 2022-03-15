module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "next",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended",
    "./configs/eslint/js",
    "./configs/eslint/ts",
    "./configs/eslint/unicorn",
    "./configs/eslint/import",
    "./configs/eslint/next",
    "prettier",
  ],
  ignorePatterns: ["**/libs/**"],
}
