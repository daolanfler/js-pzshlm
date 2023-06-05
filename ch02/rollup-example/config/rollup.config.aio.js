var common = require("./rollup.js");
var nodeResolve = require("rollup-plugin-node-resolve");
var commonjs = require("rollup-plugin-commonjs");

// 为了将第三方库也打包进来
// A rollup plugin which locates modules using the
// **Node resolution algorithm**, for using third party modules in `node_modules`

// all in one
// but I prefer using `umd`

module.exports = {
  input: "./index.js",
  output: {
    file: "dist/index.umd.js",
    format: "umd",
    name: "clone", // what is this one ? global name  ?
    banner: common.banner,
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js"],
    }),
    commonjs({
      include: /node_modules/,
    }),
    common.getCompiler(),
  ],
};
