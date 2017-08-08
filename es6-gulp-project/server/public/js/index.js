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

	{
	  /**
	   * 函数参数默认值
	   */
	  var test = function test(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

	    //参数 y 默认值为 world
	    console.log('默认值', x, y);
	  };

	  test('hello'); //hello world
	  test('hello', 'cg'); //hello cg
	}

	{
	  var test2 = function test2(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	    //给y赋值的x,是函数内部作用域的x
	    console.log('作用域', x, y);
	  };

	  /**
	   * 函数作用域
	   */
	  var x = 'test';

	  test2('hello'); //hello hello
	  test2(); //undefined undefined
	}

	{
	  /**
	   * 函数的rest参数，类似 arguments 对象，
	   * 把离散的参数转化成伪数组
	   * 但是没有 arguments[0] 的问题
	   */
	  var test3 = function test3() {
	    var _console;

	    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	      arg[_key] = arguments[_key];
	    }

	    (_console = console).log.apply(_console, arg); // 1 2 3 4 'a'
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var v = _step.value;

	        console.log('rest', v); // 1 2 3 4 'a'
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
	  };

	  test3(1, 2, 3, 4, 'a');
	}

	{
	  var _console2, _console3;

	  /**
	   * 扩展运算符，rest参数的逆运算
	   * 把数组参数转化成离散的参数
	   */
	  (_console2 = console).log.apply(_console2, [1, 2, 4]); //1 2 4
	  (_console3 = console).log.apply(_console3, ['a'].concat([1, 2, 4])); //a 1 2 4
	}

/***/ })
/******/ ]);