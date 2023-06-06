import { resolve } from "path";
import { copyTmpl, copyFile, mergeTmpl2JSON } from "../util/copy";
import { getDirName } from "../util/file";

export function init(cmdPath, name, option) {
  if (!option.prettier) {
    return;
  }

  console.log("@js-lib/prettier: init");

  copyTmpl(
    resolve(getDirName(import.meta.url), `./template/.prettierignore`),
    resolve(cmdPath, name, ".prettierignore"),
    option
  );

  copyFile(
    resolve(getDirName(import.meta.url), `./template/.prettierrc.json`),
    resolve(cmdPath, name, ".prettierrc.json")
  );

  mergeTmpl2JSON(
    resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    resolve(cmdPath, name, "package.json"),
    option
  );
}
