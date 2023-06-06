import { resolve } from "path";
import { copyTmpl } from "../util/copy.js";
import { getDirName } from "../util/file.js";

export async function init(cmdPath, name, option) {
  if (!option.ci) {
    return;
  }

  console.log("@js-lib/ci: init");

  if (option.ci === "github") {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/.github.yml.tmpl`),
      resolve(cmdPath, name, ".github/workflows/ci.yml"),
      option
    );
  } else if (option.ci === "circleci") {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/.circleci.yml.tmpl`),
      resolve(cmdPath, name, ".circleci/config.yml"),
      option
    );
  } else if (option.ci === "travis") {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/.travis.yml`),
      resolve(cmdPath, name, ".travis.yml"),
      option
    );
  }
}
