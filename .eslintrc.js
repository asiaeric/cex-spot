module.exports = {
  root: true,
  extends: ["universe/native", "universe/web", "prettier", "expo"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  ignorePatterns: ["build"],
  parser: "@typescript-eslint/parser",
};
