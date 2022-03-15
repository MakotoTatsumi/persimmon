const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/extensions": [
      ERROR,
      {
        js: "never",
        ts: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.stories.{ts,tsx}", "**/*.test.tsx"],
      rules: {
        "import/no-extraneous-dependencies": OFF,
      },
    },
  ],
}
