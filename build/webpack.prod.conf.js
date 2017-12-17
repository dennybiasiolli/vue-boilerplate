const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = Object.assign({}, baseWebpackConfig);

prodWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  // keep module.id stable when vender modules does not change
  new webpack.HashedModuleIdsPlugin(),
  // enable scope hoisting
  new webpack.optimize.ModuleConcatenationPlugin()
);

module.exports = prodWebpackConfig;
