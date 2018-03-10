const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = Object.assign({}, baseWebpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: './www',
    inline: true
  }
})

devWebpackConfig.output.publicPath = 'js/'
devWebpackConfig.output.pathinfo = true

devWebpackConfig.devtool = 'source-map'

devWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
  })
)

module.exports = devWebpackConfig
