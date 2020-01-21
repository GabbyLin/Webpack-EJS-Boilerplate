const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/', 
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
});