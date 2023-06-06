import { checkProjectExists } from "./util/file.js";
import { init as initRoot } from "./root/index.js";
import { init as initBuild } from "./build/index.js";
import { init as initPrettier } from "./prettier/index.js";
import { init as initEslint } from "./eslint/index.js";
import { init as initCommitlint } from "./commitlint/index.js";
import { init as initTest } from "./test/index.js";
import { init as initHusky } from "./husky/index.js";
import { init as initCi } from "./ci/index.js";

export async function init(argv, answers) {
  // cmmand running path
  const cmdPath = process.cwd();

  const option = { ...argv, ...answers };
  const { name } = option;

  const pathname = String(typeof argv._[1] !== "undefined" ? argv._[1] : name);

  // 运行命令
  if (!pathname) {
    console.error("error: jslibbook create need name");
    return;
  }

  console.log(cmdPath, name);
  if (checkProjectExists(cmdPath, name)) {
    console.log("项目已存在");
    process.exit(1);
  }

  // 这里虽然用的异步 api 但是都用了 await ，这些会有依赖关系？ 而且异步写入文件，居然会报错？ mkdir: xxx dir already exists
  await initRoot(cmdPath, pathname, option);
  await initBuild(cmdPath, pathname, option);
  await initPrettier(cmdPath, pathname, option);
  await initEslint(cmdPath, pathname, option);
  await initCommitlint(cmdPath, pathname, option);
  await initTest(cmdPath, pathname, option);
  await initHusky(cmdPath, pathname, option);
  await initCi(cmdPath, pathname, option);
}
