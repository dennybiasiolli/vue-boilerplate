const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = Object.assign({}, baseWebpackConfig);

prodWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      }
    },
    sourceMap: true,
    parallel: true
  }),
  // enable scope hoisting
  new webpack.optimize.ModuleConcatenationPlugin()
);

module.exports = prodWebpackConfig;
