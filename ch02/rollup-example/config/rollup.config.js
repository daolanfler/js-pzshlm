var common = require('./rollup.js')

module.exports = {
  input: "./index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    banner: common.banner
  },
  plugins: [common.getCompiler()],
}