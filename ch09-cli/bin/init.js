import { checkProjectExists } from "./util/file.js";
import root from "./root/index.js";

export function init(argv, answers) {
  const cmdPath = process.cwd();
  console.log(process.cwd());

  if (checkProjectExists(cmdPath, argv.name)) {
    console.log("项目已存在");
    process.exit(1);
  }
}
