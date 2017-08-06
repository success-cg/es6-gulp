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

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	/**
	 * 解构赋值
	 */

	{
	  var a = void 0,
	      b = void 0,
	      rest = void 0;
	  //解构赋值配对来赋值
	  a = 1;
	  b = 2;
	  console.log(a, b); // 1 2
	}

	{
	  var _a = void 0,
	      _b = void 0,
	      _rest = void 0;
	  //解构赋值可以配对成数组
	  _a = 1;
	  _b = 2;
	  _rest = [3, 4, 5, 6];
	  console.log(_a, _b, _rest); // 1 2 [3,4,5,6]
	}

	{
	  var _a2 = void 0,
	      _b2 = void 0;
	  //解构赋值用于对象的赋值
	  var _a$b = { a: 1, b: 2 };
	  _a2 = _a$b.a;
	  _b2 = _a$b.b;
	  console.log(_a2, _b2); // 1 2
	}

	{
	  var _a3 = void 0,
	      _b3 = void 0,
	      c = void 0,
	      _rest2 = void 0;
	  //解构赋值可以设置默认值
	  var _ref = [1, 2];
	  _a3 = _ref[0];
	  _b3 = _ref[1];
	  var _ref$ = _ref[2];
	  c = _ref$ === undefined ? 3 : _ref$;
	  console.log(_a3, _b3, c); // 1 2 3
	}

	{
	  var _a4 = void 0,
	      _b4 = void 0,
	      _c = void 0,
	      _rest3 = void 0;
	  //解构赋值没有配对成功，就是undefined
	  var _ref2 = [1, 2];
	  _a4 = _ref2[0];
	  _b4 = _ref2[1];
	  _c = _ref2[2];
	  console.log(_a4, _b4, _c); // 1 2 undefined
	}

	{
	  var _a5 = 1,
	      _b5 = 2;
	  // 解构赋值用于变量交换
	  var _ref3 = [_b5, _a5];
	  _a5 = _ref3[0];
	  _b5 = _ref3[1];
	  console.log(_a5, _b5); // 2 1
	}

	{
	  var fn = function fn() {
	    return [1, 2];
	  };

	  var _a6 = void 0,
	      _b6 = void 0;

	  //解构赋值用于函数的返回值提取
	  var _fn = fn();

	  var _fn2 = _slicedToArray(_fn, 2);

	  _a6 = _fn2[0];
	  _b6 = _fn2[1];
	  console.log(_a6, _b6); // 1 2
	}

	{
	  var _fn3 = function _fn3() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a7 = void 0,
	      _b7 = void 0,
	      _c2 = void 0;

	  //解构赋值可以忽略中间值
	  var _fn4 = _fn3();

	  var _fn5 = _slicedToArray(_fn4, 4);

	  _a7 = _fn5[0];
	  _b7 = _fn5[3];
	  console.log(_a7, _b7); //1 4
	}

	{
	  var _fn6 = function _fn6() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a8 = void 0,
	      _b8 = void 0,
	      _c3 = void 0;

	  //解构赋值可以返回数组
	  var _fn7 = _fn6();

	  var _fn8 = _toArray(_fn7);

	  _a8 = _fn8[0];
	  _b8 = _fn8.slice(1);
	  console.log(_a8, _b8); //1 [2,3,4,5]
	}

	{
	  var o = { p: 42, q: true };
	  var p = o.p,
	      q = o.q; //解构赋值用于对象的赋值，匹配key赋值value

	  console.log(p, q); // 42 true
	}

	{
	  var _a10 = { a: 3 },
	      _a10$a = _a10.a,
	      _a9 = _a10$a === undefined ? 10 : _a10$a,
	      _a10$b = _a10.b,
	      _b9 = _a10$b === undefined ? 5 : _a10$b; //解构赋值用在对象上，可以设置默认值


	  console.log(_a9, _b9); //3 5
	}

	{
	  var metaData = {
	    title: 'abc',
	    test: [{
	      title: 'test',
	      desc: 'description'
	    }]
	  };

	  var esTitle = metaData.title,
	      _metaData$test = _slicedToArray(metaData.test, 1),
	      cnTitle = _metaData$test[0].title;
	  //解构赋值可以提取多层级对象的value值，需要把对象结构和key保证


	  console.log(esTitle, cnTitle); //abc test
	}

/***/ })
/******/ ]);