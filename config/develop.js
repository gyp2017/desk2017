const path = require('path')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./common.js')

module.exports = webpackMerge(commonConfig, {

  devtool: '#eval-source-map',

  output: {
    path: path.resolve(__dirname, '../dev'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins:[
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    noInfo: false,
    contentBase: [path.resolve(__dirname, '../dev'), path.resolve(__dirname, '../data')],
    compress: true,
    port: 8080,
    host: '0.0.0.0'
  }
})
