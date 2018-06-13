const webpack = require('webpack')
const baseConfig = require('./webpack.base')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
        // 将第三方库包单独打包，充分利用浏览器缓存        
        vendors: ['react','react-dom','react-router-dom','whatwg-fetch']
    },
    ...baseConfig.config,
    devtool: false,
    plugins:[
        // html 模板插件
        baseConfig.htmlTemplate,
        // 启用作用域提升,让代码文件更小、运行的更快
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 提取公共代码vendors
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'[name].[hash:4].js'
        }),
        // 抽离出css
        baseConfig.extractCss,
        // 压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                pure_funcs: ['console.log']
            }
        }),
        // 定义全局常量
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        // 加署名
        new webpack.BannerPlugin('Copyright by Zero https://github.com/l-Lemon/blog')
    ]
}