const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    contentBase: 'src',
    historyApiFallback: true,
    stats: 'minimal',
    colors: true,
    inline: true
  },
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    main: './src/main'
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'js/[name].js',
    sourceMapFilename: 'map/[name].map'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.html'],
    root: 'src'
  },
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint', exclude: ['node_modules'] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.css$/, loader: 'raw?css' },
      { test: /\.html$/, loader: 'html?interpolate' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    })
  ]
};
