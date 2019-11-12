const {ProvidePlugin} = require("webpack")

const path = require('path');
const appPath = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: [
        '@babel/polyfill',
        "react-hot-loader/patch",
        path.resolve(__dirname, appPath.srcPath),
    ],
    output: {
        path: path.resolve(__dirname, appPath.buildPath),
        filename: './[name].bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: path.resolve(__dirname, `${appPath.buildPath}/index.html`),
            template: path.resolve(__dirname, appPath.htmlTemplate)
        }),
        new ProvidePlugin({
            Glamor: 'glamor/react'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool:'source-map',
    devServer: {
        contentBase: '/src',
        port: 3000,
        historyApiFallback:true,
    }
};