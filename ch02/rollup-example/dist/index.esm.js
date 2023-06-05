function clone(source) {
  const t = type(source);
  if (t !== "object" && t !== "array") {
    return source;
  }

  let target;
  if (t === "object") {
    target = {};
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = clone(source[key]);
      }
    }
  }

  if (t === "array") {
    target = [];
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]);
    }
  }

  return target;
}

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export { clone, type };
