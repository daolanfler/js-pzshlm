import { resolve } from "path";
import { copyTmpl, mergeTmpl2JSON } from "../util/copy.js";
import { getDirName } from "../util/file.js";

export async function init(cmdPath, name, option) {
  if (!option.test.mocha) {
    return;
  }

  console.log("@js-lib/test: init");

  await copyTmpl(
    resolve(getDirName(import.meta.url), `./template/.nycrc`),
    resolve(cmdPath, name, ".nycrc")
  );

  await copyTmpl(
    resolve(getDirName(import.meta.url), `./template/index.html.tmpl`),
    resolve(cmdPath, name, "test/browser/index.html"),
    option
  );

  await copyTmpl(
    resolve(getDirName(import.meta.url), `./template/test.js`),
    resolve(cmdPath, name, "test/test.js"),
    option
  );

  mergeTmpl2JSON(
    resolve(getDirName(import.meta.url), `./template/package.json.tmpl`),
    resolve(cmdPath, name, "package.json"),
    option
  );

  if (option.test.puppeteer) {
    await copyTmpl(
      resolve(getDirName(import.meta.url), `./template/puppeteer.js`),
      resolve(cmdPath, name, "test/browser/puppeteer.js")
    );
  }
}
