module.exports = {
  "extends": [
    "react-app",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",

    // editorconfig alternative
    "no-trailing-spaces": ["warn", { "ignoreComments": true }],
    // use prettier
    //"eol-last": ["warn", "always"],
    "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }]
  }
}