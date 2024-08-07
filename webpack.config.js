const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        home: path.resolve(__dirname, 'src/javascript/pages/home.js'),
        menu: path.resolve(__dirname, 'src/javascript/pages/menu.js'),
        email: path.resolve(__dirname, 'src/javascript/pages/email.js'),
        about: path.resolve(__dirname, 'src/javascript/pages/about.js'),
    },
    output: {
        name: '[name].[contenthash].js',
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
            title: 'Cup and Crust',
        }),
    ],
}