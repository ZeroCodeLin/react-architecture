const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
    },
    ...baseConfig.config,
    plugins:[
        baseConfig.htmlTemplate,
        baseConfig.extractCss
    ],
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        proxy: {
            "/api": {
              target: "http://127.0.0.1:3000/",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}