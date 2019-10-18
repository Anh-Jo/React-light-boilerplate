const path = require('path');
const appPath = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        "react-hot-loader/patch",
        path.resolve(__dirname, appPath.srcPath),
    ],
    output: {
        path: path.resolve(__dirname, appPath.buildPath),
        filename: './[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
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
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: '/src'
    }
};