import { resolve } from "path";
import { copyTmpl, mergeTmpl2JSON } from "../util/copy";
import { getDirName } from "../util/file.js";

export function init(cmdPath, name, option) {
    if (!option.husky) {
        return;
    }

    console.log("@js-lib/husky: init");

    if (option.commitlint.commitlint) {
        copyTmpl(
            resolve(getDirName(import.meta.url), `./template/commit-msg.tmpl`),
            resolve(cmdPath, name, ".husky/commit-msg"),
            option
        );
    }

    if (option.eslint) {
        copyTmpl(
            resolve(getDirName(import.meta.url), `./template/.lintstagedrc.js`),
            resolve(cmdPath, name, ".lintstagedrc.js"),
            option
        );
    }

    copyTmpl(
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

