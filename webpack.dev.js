const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require("webpack");

const webpackConfig = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        port:8001,
        hot: true,
        compress: true,
        open: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/dist/index.html' },
            ]
        },
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {
            '/api': {
                target: 'https://www.xxx.com/',//正式機api路徑
                changeOrigin: true,
                secure: false,
            }
        }
        
    },
    plugins:[
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('')
        })
    ]
});
module.exports = webpackConfig;
