var webpack = require('webpack')

module.exports = {
  entry: {
    top: __dirname + "/frontend/javascripts/top/index.js",
    login: __dirname + "/frontend/javascripts/login/index.js",
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$':        'vue/dist/vue.esm.js',
      'vue-router$': 'vue-router/dist/vue-router.js'
    },
    extensions: ['.js']
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
