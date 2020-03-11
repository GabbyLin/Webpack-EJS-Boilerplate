const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require("webpack");


const webpackConfig = merge(common, {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].bundle.js',
        publicPath: './',
    },
    plugins:[
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('https://www.xxx.com/')//正式機路徑
        })
    ]
});

module.exports = webpackConfig;


