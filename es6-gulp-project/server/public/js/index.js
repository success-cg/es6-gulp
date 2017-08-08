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

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * 对象扩展
	 */

	{
	  /**
	   * 简洁表示法
	   */
	  //对象简洁写法
	  var a = 1;
	  var b = 'hello';
	  var es5 = {
	    a: a,
	    b: b
	    //对象的key value 一样则可以简写
	  };var es6 = {
	    a: a,
	    b: b
	  };

	  console.log(es5, es6); //输出结果一样

	  //函数简洁写法
	  var es5_method = {
	    hello: function hello() {
	      console.log('hello');
	    }
	  };

	  var es6_method = {
	    hello: function hello() {
	      console.log('hello');
	    }
	  };
	  console.log(es5_method.hello(), es6_method.hello()); //输出结果一样
	}

	{
	  /**
	   * 属性表达式
	   */
	  var _a = 'b';
	  var es5_obj = {
	    a: 'c'
	  };
	  //es6中，对象的key值可以是表达式，用[]包起来
	  var es6_obj = _defineProperty({}, _a, 'c');
	  console.log(es6_obj); //{b: 'c'}
	}

	{
	  /**
	   * 新增API: Object.is
	   * 功能和 '===' 一样
	   */
	  console.log('字符串', Object.is('abc', 'abc')); //true
	  console.log('数组', Object.is([], []), [] === []); //false false
	}

	{
	  /**
	   * 新增API：Object.assign
	   * 浅拷贝对象，根据key,有就覆盖，没有就添加
	   */
	  var obj1 = { a: 'a' };
	  var obj2 = { b: 'b' };
	  console.log('拷贝', Object.assign(obj1, obj2)); //{a: "a", b: "b"}
	}

/***/ })
/******/ ]);