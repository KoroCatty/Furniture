// const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   open: ['/webpack'],
  //   port: 9000,
  //   contentBase: path.resolve(__dirname, 'public'),
  // },
});
