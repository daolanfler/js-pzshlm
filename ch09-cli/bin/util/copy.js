import fs from "fs-extra";
import path from "path";
import template from "template_js";
import { extendDeep } from "@jsmini/extend";

export async function copyFile(from, to) {
  await fs.copy(from, to);
}

export function mkdirSyncGuard(target) {
  try {
    // in case recursive is not supported
    fs.mkdirSync(target, { recursive: true });
  } catch (e) {
    // ensure
    fs.mkdirpSync(target);
  }
}

export async function copyTmpl(from, to, data = {}) {
  if (path.extname(from) !== ".tmpl") {
    await copyFile(from, to);
    return;
  }
  const parentPath = path.dirname(to);

  mkdirSyncGuard(parentPath);
  fs.writeFileSync(to, readTmpl(from, data), { encoding: "utf-8" });
}

function readTmpl(from, data) {
  const content = fs.readFileSync(from, {
    encoding: "utf-8",
  });
  return template(content, data);
}

export function mergeObj2JSON(object, to) {
  const json = JSON.parse(fs.readFileSync(to, { encoding: "utf8" }));

  extendDeep(json, object);

  fs.writeFileSync(to, JSON.stringify(json, null, "  "), { encoding: "utf8" });
}

export function mergeJSON2JSON(from, to) {
  const json = JSON.parse(fs.readFileSync(from, { encoding: "utf8" }));

  mergeObj2JSON(json, to);
}

function mergeTmpl2JSON(from, to, data = {}) {
  const json = JSON.parse(readTmpl(from, data));
  mergeObj2JSON(json, to);
}
