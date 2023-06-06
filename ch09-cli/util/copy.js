import { copy, mkdirSync, mkdirp } from "fs-extra";

export async function copyFile(from, to) {
  console.log(from, to);
  await copy(from, to);
}

export function mkdirSyncGuard(target) {
  mkdirSync(target, { recursive: true });
}
