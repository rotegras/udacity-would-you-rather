// eslint-disable-next-line
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "prettier/prettier": 0,
      "no-console": 0,
      "react/prop-types": "warn",

    },
    "overrides": [
      {
        "files": [ "*.styles.js", "index.js" ],
        "rules": {
          "import/prefer-default-export": "off"
        }
      }
    ]
};
