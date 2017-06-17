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
        test: /\.is$/,
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
      'vue$':        'vue/dist/vue.js',
      'vue-router$': 'vue-router/dist/vue-router.js'
    },
    extensions: ['.js']
  }
};
