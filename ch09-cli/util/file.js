import { existsSync } from "node:fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "node:url";

/**
 * get dir name of current file
 * @param {string} url import.meta.url
 * @returns {string}
 */
export function getDirName(url) {
  return dirname(fileURLToPath(url));
}

export function checkProjectExists(cmdPath, name) {
  return existsSync(resolve(cmdPath, name));
}
