const { resolve } = require('path');

module.exports = {
  srcPath: resolve(__dirname, '../src'),
  distPath: resolve(__dirname, '../dist'),
  publicPath: resolve(__dirname, '../public'),
  pkgPath: resolve(__dirname, '../package.json'),
};
