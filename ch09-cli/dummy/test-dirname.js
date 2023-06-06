import { copyFile } from "../bin/util/copy.js";
import { getDirName } from "../bin/util/file.js";
import path, { resolve } from "path";

const dirname = getDirName(import.meta.url);

console.log(dirname);

function testCopy() {
  copyFile(resolve(dirname, './test-copy/'), resolve(dirname,'d/e/f' ));
}

testCopy()

// console.log(path.resolve(import.meta.url, '../b'))
