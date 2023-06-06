import { resolve } from "path";
import { copyTmpl, mergeTmpl2JSON } from "../util/copy";
import { getDirName } from "../util/file.js";

export function init(cmdPath, name, option) {
  if (!option.commitlint.commitlint) {
    return;
  }

  console.log("@js-lib/commitlint: init");

  copyTmpl(
    resolve(getDirName(import.meta.url), `./template/commitlint.config.js`),
    resolve(cmdPath, name, "commitlint.config.js")
  );

  mergeTmpl2JSON(
    resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    resolve(cmdPath, name, "package.json"),
    option
  );
}

