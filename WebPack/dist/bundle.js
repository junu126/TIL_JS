/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nReferenceError: [BABEL] C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\src\\\\app.js: Unknown option: .module. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.\\n    at throwUnknownError (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:123:11)\\n    at Object.keys.forEach.key (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:107:5)\\n    at Array.forEach (<anonymous>)\\n    at validateNested (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:83:21)\\n    at validate (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:74:10)\\n    at instantiatePreset (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:244:36)\\n    at cachedFunction (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\caching.js:33:19)\\n    at loadPresetDescriptor (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:235:45)\\n    at config.presets.reduce (C:\\\\Users\\\\10406KJW\\\\Documents\\\\TIL_JS\\\\WebPack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:77:21)\\n    at Array.reduce (<anonymous>)\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });