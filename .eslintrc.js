module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends":[
        "eslint:recommended",
        'plugin:react/recommended',
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/prop-types": 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': 0
    }
};