'use strict'
import path from 'path';
import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
        index: './src/entry/index.jsx',
    },
    output: {
        path: path.join(__dirname, './dist'),
        //网站运行时的访问路径，不设置的话，打包出的html中的默认引用的路径会是相对路径
        publicPath: "./",
        //打包后的文件名
        filename: 'js/[name].js',
    },
    resolve: {
        //require文件的时候不需要写后缀了，可以自动补全
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        loaders: [ //定义一系列加载器
            {
                test: /\.html$/,
                loader: "html-loader",
            }, /*html*/ {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        // 类库统一打包生成一个文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.js',
            minChunks: 2, // 提取使用2次以上的模块，打包到vendor里
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',  //打包后的html存放路径，也是从distPath开始
            template: './src/index.html', //文件模板，就是打包前的html文件
            inject: true, //可以对head和body做修改
            //设置该页面引用的文件，只有符合条件的才会被引用
            chunks: ['vendor', 'index'],
            minify: { //压缩HTML
                removeComments: true,
                collapseWhitespace: false
            },
            hash: true, //版本号，打出来的html中对css和js的引用自带版本号
        }),
    ],
};
