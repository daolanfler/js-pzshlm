const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: 'development',
  resolve:{
    mainFields: ['module', 'main']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
