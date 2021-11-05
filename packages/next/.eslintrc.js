module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "./configs/eslint/js",
    "./configs/eslint/unicorn",
    "./configs/eslint/import",
    "./configs/eslint/next",
    "prettier",
  ],
}
