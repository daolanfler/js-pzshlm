import path from "path";
import fs from "fs-extra";
import { copyTmpl } from "../util/copy.js";
import { getDirName } from "../util/file.js";

export async function init(cmdPath, name, option) {
  console.log("@js-lib/root: init");

  const dirname = getDirName(import.meta.url);

  // init template
  await fs.copy(
    path.resolve(dirname, "./template/base"),
    path.resolve(cmdPath, name)
  );

  // init readme
  await copyTmpl(
    path.resolve(dirname, "./template/README.md.tmpl"),
    path.resolve(cmdPath, name, "README.md"),
    option
  );

  // init license
  await copyTmpl(
    path.resolve(dirname, `./template/license.tmpl`),
    path.resolve(cmdPath, name, "LICENSE"),
    option
  );

  // init package
  await copyTmpl(
    path.resolve(dirname, `./template/package.json.tmpl`),
    path.resolve(cmdPath, name, "package.json"),
    option
  );
}
