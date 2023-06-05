var pkg = require("../package.json");
var babel = require("rollup-plugin-babel");

var version = pkg.version;

var banner = `/*!
  * ${pkg.name} ${version} 
  * Licensed under MIT
  */
`;

exports.banner = banner;

function getCompiler(opt) {
  return babel({
    babelrc: false,
    runtimeHelpers: true,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, safari >= 10, ie >= 8, Chrome >= 45",
            node: "0.12",
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 2,
        },
      ],
    ],
    exclude: "node_modules/**",
  });
}

exports.getCompiler = getCompiler;
