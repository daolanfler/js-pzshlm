import fs from "fs-extra";
import path from "path";
import template from "template_js";

export async function copyFile(from, to) {
  console.log(from, to);
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
    return 
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
