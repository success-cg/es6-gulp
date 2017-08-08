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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
	   * 只拷贝自身的属性，不拷贝继承的属性
	   */
	  var obj1 = { a: 'a' };
	  var obj2 = { b: 'b' };
	  console.log('拷贝', Object.assign(obj1, obj2)); //{a: "a", b: "b"}
	}

	{
	  /**
	   * 新增API：Object.entries
	   * Object.entries() 方法返回一个给定对象自己的可枚举属性[key, value]对的数组
	   */
	  var test = { k: 123, h: 456 };
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.entries(test)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          value = _step$value[1];

	      console.log('[key, value]', [key, value]);
	      // ["k", 123]
	      // ["h", 456]
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

/***/ })
/******/ ]);