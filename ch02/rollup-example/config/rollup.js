var pkg = require('../package.json')

var version = pkg.version;

var banner = `/*!
  * ${pkg.name} ${version} 
  * Licensed under MIT
  */
`

exports.banner = banner