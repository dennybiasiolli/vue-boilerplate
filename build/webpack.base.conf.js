const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../www/js/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|vue)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    })
  ]
}
