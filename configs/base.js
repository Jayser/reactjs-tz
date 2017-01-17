const resolve = require('path').resolve;
const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV || 'development';

const base = {
    path: {
        root: resolve(),
        source: resolve('app'),
        output: resolve('build'),
        reports: resolve('reports'),
        babel: resolve('configs/babel/.babelrc'),
        fonts: './fonts'
    },
    isDevelop: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    port: process.env.PORT || 8080,
    pkg: packageJSON
};

module.exports = base;
