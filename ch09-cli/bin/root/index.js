import path from "path";
import fs from "fs-extra";
import { copyTmpl } from "../util/copy.js";

export function init(cmdPath, name, option) {
  console.log("@js-lib/root: init");

  // init template
  fs.copy(
    path.resolve(import.meta.url, "./template/base"),
    path.resolve(cmdPath, name)
  );

  // init readme
  copyTmpl(
    path.resolve(import.meta.url, "./template/README.md.tmpl"),
    path.resolve(cmdPath, name, 'README.md'),
    option
  );
}
