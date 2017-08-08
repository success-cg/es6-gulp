/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * 数组扩展
	 */

	{
	  var arr = Array.of(3, 4, 7, 9, 11);
	  console.log(arr); //[3,4,7,9,11]
	  //Array.of() 方法创建一个具有可变数量参数的
	  //新数组实例，而不考虑参数的数量或类型。

	  /**
	   *  Array.of() 和 Array 构造函数之间的区别在于处理整数参数
	   */
	  Array.of(7); // [7]
	  Array.of(1, 2, 3); // [1, 2, 3]
	  //Array.of(7) 创建一个具有单个元素 7 的数组

	  Array(7); // [ , , , , , , ]
	  Array(1, 2, 3); // [1, 2, 3]
	  //Array(7) 创建一个包含 7 个 undefined 元素的数组。
	}

/***/ })
/******/ ]);