/*!
  * rollup-example 1.0.0 
  * Licensed under MIT
  */

import _Array$from from '@babel/runtime-corejs2/core-js/array/from';

function clone(source) {
  var t = type(source);
  if (t !== "object" && t !== "array") {
    return source;
  }
  var target;
  if (t === "object") {
    target = {};
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = clone(source[key]);
      }
    }
  }
  if (t === "array") {
    target = [];
    for (var i = 0; i < source.length; i++) {
      target[i] = clone(source[i]);
    }
  }
  return target;
}
function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
var x = _Array$from("abc");
window.x = x;

export { clone, type };
