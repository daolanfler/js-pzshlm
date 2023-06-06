import path from "path";
import { getDirName } from "../util/file.js";
import { copyTmpl, copyFile, mergeTmpl2JSON } from '../util/copy.js';

export function init(cmdPath, name, option) {
  console.log("@js-lib/build: init");

  copyTmpl(
    path.resolve(getDirName(import.meta.url), `./template/rollup.js.tmpl`),
    path.resolve(cmdPath, name, "config/rollup.js"),
    option
  );

  copyFile(
    path.resolve(
      getDirName(import.meta.url),
      `./template/rollup.config.aio.js`
    ),
    path.resolve(cmdPath, name, "config/rollup.config.aio.js")
  );

  copyFile(
    path.resolve(
      getDirName(import.meta.url),
      `./template/rollup.config.esm.js`
    ),
    path.resolve(cmdPath, name, "config/rollup.config.esm.js")
  );

  copyFile(
    path.resolve(getDirName(import.meta.url), `./template/rollup.config.js`),
    path.resolve(cmdPath, name, "config/rollup.config.js")
  );

  copyTmpl(
    path.resolve(getDirName(import.meta.url), `./template/.babelrc.tmpl`),
    path.resolve(cmdPath, name, ".babelrc"),
    option
  );

  // package.json
  mergeTmpl2JSON(
    path.resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    path.resolve(cmdPath, name, "package.json"),
    option
  );
}

