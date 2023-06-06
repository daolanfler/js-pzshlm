import template from "template_js";
import { copyTmpl } from "../bin/util/copy.js";
import path from "path";
import { getDirName } from "../bin/util/file.js";

const str = `<span><%=name%></span>`;
const x = template(str, { name: "yan" });
console.log(x);

const str2 = `
<span><%if (win) {%> 胜利 <%} else {%> 失败 <%}%></span>
`;

const x1 = template(str2, { win: true });
console.log(x1);

const curDirname = getDirName(import.meta.url);

await copyTmpl(path.resolve(curDirname, "./a.tmpl"), path.resolve(curDirname, "b"), {
  win: true,
});
