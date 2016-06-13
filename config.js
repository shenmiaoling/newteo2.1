const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config');
webpackConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new AssetsPlugin({
    path: path.join(__dirname, 'assets')
  }),
  new ExtractTextPlugin('application-[hash].css')
];
webpackConfig.output.filename = 'application-[hash].js';
module.exports = webpackConfig;
