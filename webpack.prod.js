const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: './',  //build
        path: path.resolve(__dirname, 'dist'),
    },
});