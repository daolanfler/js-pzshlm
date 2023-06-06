import { resolve } from "path";
import { copyTmpl, mergeTmpl2JSON } from "../util/copy";
import { getDirName } from "../util/file.js";

export function init(cmdPath, name, option) {
  if (!option.eslint) {
    return;
  }

  console.log("@js-lib/eslint: init");

  copyTmpl(
    resolve(getDirName(import.meta.url), `./template/.eslintignore`),
    resolve(cmdPath, name, ".eslintignore")
  );

  copyTmpl(
    resolve(getDirName(import.meta.url), `./template/.eslintrc.js.tmpl`),
    resolve(cmdPath, name, ".eslintrc.js"),
    option
  );

  mergeTmpl2JSON(
    resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    resolve(cmdPath, name, "package.json"),
    option
  );
}

