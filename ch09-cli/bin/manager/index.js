import path from "path";
import { exec } from "child_process";
import ora from "ora";

// manager means package manager

export function init(cmdPath, name, option) {
  const manager = option.manager;
  if (!manager) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    exec(
      "git init && git add . && git commit -m 'init'",
      { cwd: path.resolve(cmdPath, name) },
      (err, stdout, stderr) => {
        if (err) {
          console.warn("git init 失败，跳过 install 过程");
          return;
        }

        // install
        const spinner = ora();
        spinner.start("Install packages...");
        
        exec(
          `${manager} install`,
          { cwd: path.resolve(cmdPath, name) },
          (err, stdout, stderr) => {
            if (err) {
              console.error(err)
              reject();
              return;
            }

            // 安装成功
            spinner.succeed("Install packages successfully!");
            resolve();
          }
        );
      }
    );
  });
}
