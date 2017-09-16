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
	 * Symbol 创造的变量独一无二，
	 * 每个从Symbol()返回的symbol值都是唯一的。
	 */

	{
	  // 声明
	  var a1 = Symbol();
	  var a2 = Symbol();
	  console.log(a1 === a2); //false
	  var a3 = Symbol.for('a3');
	  // Symbol.for方法检测是否声明过key值为a3的变量，
	  // 如果声明过a3 ，则返回该值，如果没有，则声明之。
	  var a4 = Symbol.for('a3');
	  console.log('a4 === a3', a4 === a3); //true
	}

	{
	  var _obj;

	  // Symbol 的作用
	  var _a = Symbol.for('abc');
	  // 解决变量冲突
	  var obj = (_obj = {}, _defineProperty(_obj, _a, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 456), _obj);
	  console.log('obj', obj); //{abc: 345, c: 456, Symbol(abc): "123"}

	  // 使用Symbol作为key值，使用for in、let of 方法是取不到这个值的
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          value = _step$value[1];

	      //Object.entries 见lesson8
	      console.log('let of', key, value);
	    }
	    // 打印结果
	    // abc 345
	    // c 456

	    // 可以使用Object.getOwnPropertySymbols方法获取 Symbol 作为key的属性
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

	  Object.getOwnPropertySymbols(obj).forEach(function (item) {
	    console.log('Object.getOwnPropertySymbols', item, obj[item]);
	    //只获取 Symbol 作为key的值
	    //Symbol(abc) "123"
	  });

	  //可以使用 Reflect.ownKeys 方法获取所有的key值，包括Symbol和普通的
	  Reflect.ownKeys(obj).forEach(function (item) {
	    console.log('Reflect.ownKeys', item, obj[item]);
	  });
	  // 打印结果
	  // abc 345
	  // c 456
	  // Symbol(abc) "123"
	}

/***/ })
/******/ ]);