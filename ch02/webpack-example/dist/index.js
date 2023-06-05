/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const clone = __webpack_require__(/*! ./lib/clone */ \"./lib/clone/index.js\")\nconst type = __webpack_require__(/*! ./lib/type */ \"./lib/type/index.js\")\n\nmodule.exports = {\n  clone,\n  type\n}\n\n//# sourceURL=webpack://ch02/./index.js?");

/***/ }),

/***/ "./lib/clone/index.js":
/*!****************************!*\
  !*** ./lib/clone/index.js ***!
  \****************************/
/***/ ((module) => {

eval("function clone(source) {\n  const t = type(source);\n  if (t !== \"object\" && t !== \"array\") {\n    return source;\n  }\n\n  let target;\n  if (t === \"object\") {\n    target = {};\n    for (let key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = clone(source[key]);\n      }\n    }\n  }\n\n  if (t === \"array\") {\n    target = [];\n    for (let i = 0; i < source.length; i++) {\n      target[i] = clone(source[i]);\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = clone\n\n//# sourceURL=webpack://ch02/./lib/clone/index.js?");

/***/ }),

/***/ "./lib/type/index.js":
/*!***************************!*\
  !*** ./lib/type/index.js ***!
  \***************************/
/***/ ((module) => {

eval("function type(data) {\n  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();\n}\n\nmodule.exports = type;\n\n\n//# sourceURL=webpack://ch02/./lib/type/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;