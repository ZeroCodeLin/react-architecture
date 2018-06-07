const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {  
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,  
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024'  
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
                            limit: '1024'  
                        }  
                    },  
                ]  
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    { 
                        loader: 'css-loader',
                        options: { importLoaders: 1 } 
                    },
                    'less-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader", "eslint-loader"],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html',favicon: './public/favicon.png'}),
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