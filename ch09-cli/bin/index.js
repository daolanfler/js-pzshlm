#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import process from "process";

const argv = yargs(hideBin(process.argv))
  .usage(`usage: jslibbook [options]`)
  .usage("usage: jslibbook <command> [options]")
  .example("jslibook new mylib", "新建一个名为mylib的项目")
  .alias("h", "help")
  .alias("v", "version")
  .command(
    // command and its alias
    ["new", "n"],
    "新建一个项目",
    (yargs) => {
      return yargs.option("name", {
        alias: "n",
        demandOption: false,
        default: "mylib",
        describe: "your library name",
        type: "string",
      });
    },
    (argv) => {
      console.log("in callback", argv);
      // TODO
    }
  )
  .epilog("copyRight by zhangsan")
  .demandCommand().argv;

console.log(argv);
