import { copyFile } from "../util/copy.js";
import { getDirName } from "../util/file.js";
import { resolve } from "path";

const dirname = getDirName(import.meta.url);

console.log(dirname);

function testCopy() {
  copyFile(resolve(dirname, '../test-copy/'), resolve(dirname,'d/e/f' ));
}

testCopy()
