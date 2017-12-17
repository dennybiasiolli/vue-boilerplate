const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = Object.assign({}, baseWebpackConfig);

devWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
  })
);

module.exports = devWebpackConfig;
