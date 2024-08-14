const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
    },
})