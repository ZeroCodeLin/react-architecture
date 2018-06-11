const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],        
        vendors: ['react','react-dom','react-router-dom','whatwg-fetch']
    }
    ,
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
    devtool: "cheap-module-source-map",
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'[name].[hash:4].js'
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                pure_funcs: ['console.log']
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
    ]
}