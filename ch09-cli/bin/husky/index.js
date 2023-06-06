import { resolve } from "path";
import { copyTmpl, mergeTmpl2JSON } from "../util/copy.js";
import { getDirName } from "../util/file.js";

export async function init(cmdPath, name, option) {
  if (!option.husky) {
    return;
  }

  console.log("@js-lib/husky: init");

  if (option.commitlint.commitlint) {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/commit-msg.tmpl`),
      resolve(cmdPath, name, ".husky/commit-msg"),
      option
    );
  }

  if (option.eslint) {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/.lintstagedrc.js`),
      resolve(cmdPath, name, ".lintstagedrc.js"),
      option
    );
  }

  await copyTmpl(
    resolve(getDirName(import.meta.url), `./template/pre-commit.tmpl`),
    resolve(cmdPath, name, ".husky/pre-commit"),
    option
  );
  mergeTmpl2JSON(
    resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    resolve(cmdPath, name, "package.json"),
    option
  );
}
