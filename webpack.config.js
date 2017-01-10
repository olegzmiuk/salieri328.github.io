'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, './');

let config = {
  devServer: {
    contentBase: path.resolve(rootDir, 'dist'),
    port: 9000
  },
  entry: {
    app: [ path.resolve(rootDir, 'src', 'bootstrap') ]
  },
  module: {
    loaders: [
      { loader: 'raw-loader', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootDir, 'dist')
  },
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'index.html')
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      rootDir
    )
  ],
  resolve: {
    extensions: [ '.js', '.ts', '.html' ]
  },
  performance : {
    hints : false
  }
};

module.exports = config;
