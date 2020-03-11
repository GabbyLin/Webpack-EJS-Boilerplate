const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const pages = require('./pages.json');
console.log(pages)
let webpackConfig = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/,
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },{
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                exclude: /node_modules/,
                use: ['file-loader'],
            },{
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[hash:8].[ext]',
                        }
                    }
                ]
            },{
                test: /\.ejs$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ejs-loader'
                }]
            },
            
        ],
    },

}


pages.forEach(function (page) {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            pageName: page.name,
            template: path.resolve(__dirname, 'src/entry.ejs'),
            filename: path.resolve(__dirname, `dist/${page.name}.html`),
            pages: pages
        })
    );
});

module.exports = webpackConfig;

