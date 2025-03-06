// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  ignorePatterns: ["/dist/*"],
  settings: {
    "import/resolver": {
      typescript: {}, // ✅ This tells ESLint how to resolve `@/` aliases
    },
  },
};
