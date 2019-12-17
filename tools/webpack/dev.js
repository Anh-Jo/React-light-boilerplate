const {ProvidePlugin} = require("webpack")

const path = require('path');
const appPath = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, appPath.srcPath),
    output: {
        path: path.resolve(__dirname, appPath.buildPath),
        filename: './[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: path.resolve(__dirname, `${appPath.buildPath}/index.html`),
            template: path.resolve(__dirname, appPath.htmlTemplate)
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
    },
    devServer: {
        contentBase: '/src',
        port: 3000
    }
};