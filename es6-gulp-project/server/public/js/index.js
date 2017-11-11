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
	  var obj = {
	    time: '2017-11-11',
	    name: 'cg',
	    _r: 123
	  };

	  var monitor = new Proxy(obj, {
	    // 代理对象属性的读取，替换返回值里的'2017'为'2018'
	    get: function get(target, key, proxy) {
	      //target为代理的obj，key为访问的key, proxy为monitor
	      console.log('target: ' + (target === obj) + ',key: ' + key); //target: true,key: time
	      console.log(proxy === monitor); //true
	      return target[key].replace('2017', '2018'); //拦截读取操作，把返回的结果里的‘2017’换成'2018'
	    },


	    // 代理对象设置属性，只能修改'name'的 value
	    set: function set(target, key, value, proxy) {
	      //target为代理的obj,key为访问的key,value为要修改的值，proxy为monitor
	      console.log('set-arguments', arguments); //arguments的长度为2
	      if (key === 'name') {
	        return target[key] = value;
	      } else {
	        return target[key];
	      }
	    },


	    // 代理key in Object操作，只有name属性可以查到，其他属性查不到
	    has: function has(target, key) {
	      //target为代理的obj，key为访问的key
	      console.log('has-arguments', arguments); //arguments的长度为2
	      if (key === 'name') {
	        return target[key];
	      } else {
	        return false;
	      }
	    },


	    // 代理delete,只能删除 '_' 存在的属性
	    deleteProperty: function deleteProperty(target, key) {
	      console.log('delete-arguments', arguments); //arguments的长度为2
	      if (key.indexOf('_') > -1) {
	        delete target[key];
	        return true;
	      } else {
	        return target[key];
	      }
	    }
	  });

	  console.log('get', monitor.time); // 2018-11-11
	  monitor.name = 'ly';
	  monitor._r = 456;
	  console.log('set', monitor); //name设置成了'ly',而_r仍然为123，没有变成456
	  console.log('has', 'name' in monitor, 'time' in monitor); // true false 只能查到name，隐藏了time和_r

	  delete monitor.time;
	  delete monitor._r;
	  console.log('delete', monitor); //time属性没有删除，_r属性删除了
	}

/***/ })
/******/ ]);