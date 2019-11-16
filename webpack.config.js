const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js',
    util: './src/util.js',
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  }
}