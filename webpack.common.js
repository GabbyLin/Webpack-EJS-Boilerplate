const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: { contentBase: 'dist/', },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.ejs',
        }),
        new HtmlWebpackPlugin({
            filename: 'page1.html',
            template: './src/page1.ejs',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: "ejs-loader?variable=data"
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },{
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },{
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },{
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                loader: "file-loader",
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },{
                test: /\.ejs$/,
                loader: 'ejs-html-loader',
                options: {
                    title: 'The Ant: An Introduction',
                    season: 1,
                    episode: 9,
                    production: process.env.ENV === 'production'
                }
            }
            
        ],
    },
};