const Webpack = require('webpack');
const cfgBase = require('../base');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        publicPath: './'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: [cfgBase.path.source]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: [cfgBase.path.source],
                loaders: ['react-hot', 'babel?extends=' + cfgBase.path.babel]
            },
            {
                test: /\.scss/,
                include: [cfgBase.path.source],
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=' + cfgBase.path.fonts + '/[name].[ext]?[hash]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=' + cfgBase.path.fonts + '/[name].[ext]?[hash]'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
