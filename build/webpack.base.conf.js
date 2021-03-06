const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

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
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin()
  ]
}
