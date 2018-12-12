const path = require('path');
const webpack = require('webpack');
const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  context: srcDir,
  entry: [
    '@babel/polyfill',
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    port: 8008,
    open: 'Chrome',
    hot: true,
    overlay: true,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
