const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        homePage: path.resolve(__dirname, 'src/javascript/pages/homePage.js'),
        menuPage: path.resolve(__dirname, 'src/javascript/pages/menuPage.js'),
        emailPage: path.resolve(__dirname, 'src/javascript/pages/emailPage.js'),
        aboutPage: path.resolve(__dirname, 'src/javascript/pages/aboutPage.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
            title: 'Cup and Crust',
            favicon: 'src/assets/images/croissant.png',
        }),
    ],
}