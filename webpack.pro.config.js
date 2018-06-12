const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
        // 将第三方库包单独打包，充分利用浏览器缓存        
        vendors: ['react','react-dom','react-router-dom','whatwg-fetch']
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash:4].js'
    },
    module:{
        rules:[
            {  
                test: /\.(woff|eot|ttf|svg|png|jpg)$/,  
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024' ,
                            name: '[name].[hash:4].[ext]'  
                        }                        
                    },  
                ]  
            },
            {  
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024',
                            name: '[name].[hash:4].[ext]'  
                        }  
                    },  
                ]  
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader","less-loader"]
                })
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
    devtool: false,
    plugins:[
        // html 模板插件
        new HtmlWebpackPlugin({template:'./src/index.html',favicon: './public/favicon.png'}),
        // 启用作用域提升,让代码文件更小、运行的更快
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 提取公共代码vendors
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'[name].[hash:4].js'
        }),
        // 抽离出css
        new ExtractTextPlugin("style.css"),
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