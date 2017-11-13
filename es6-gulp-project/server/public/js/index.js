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
	  // ES5 中使用回调处理异步操作
	  var ajax = function ajax(callback) {
	    console.log('执行');
	    setTimeout(function () {
	      callback && callback.call();
	    }, 1000);
	  };

	  ajax(function () {
	    console.log('timeout1');
	  }); // 先输出'执行'，一秒后输出'timeout1'
	}

	{
	  // 使用 Promise 处理异步操作
	  var _ajax = function _ajax() {
	    console.log('执行2');
	    return new Promise(function (resolve, reject) {
	      //resolve表示要执行下一步的操作，reject表示要中断当前操作
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };

	  _ajax().then(function () {
	    console.log('Promise', 'timeout2');
	  }); // 先输出'执行2'，一秒后输出'Promise timeout2'
	}

	{
	  // 多步骤的异步操作
	  var _ajax2 = function _ajax2() {
	    console.log('执行3');
	    return new Promise(function (resolve, reject) {
	      //resolve表示要执行下一步的操作，reject表示要中断当前操作
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };

	  _ajax2().then(function () {
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 2000);
	    });
	  }).then(function () {
	    console.log('timeout3');
	  });
	}

	{
	  // catch, 捕获异常错误
	  var _ajax3 = function _ajax3(num) {
	    console.log('执行4');
	    return new Promise(function (resolve, reject) {
	      if (num > 5) {
	        resolve();
	      } else {
	        throw new Error('出错了');
	      }
	    });
	  };

	  _ajax3(1).then(function () {
	    // then 方法执行下一步
	    console.log('log', 6);
	  }).catch(function (err) {
	    // catch 方法捕获错误
	    console.log('catch', err);
	  });
	}

	{
	  // Promise.all 的应用举例
	  // 所有图片都加载完再添加到页面
	  var loadImg = function loadImg(url) {
	    return new Promise(function (resolve, reject) {
	      var img = document.createElement('img');
	      img.src = url;
	      img.addEventListener('load', function () {
	        resolve(img); // 要把参数 img 传到下面的步骤去
	      });
	      img.addEventListener('error', function (err) {
	        reject(err);
	      });
	    });
	  };

	  var showImgs = function showImgs(imgs) {
	    console.log('imgs', imgs); // [img, img, img]
	    imgs.forEach(function (img) {
	      document.body.appendChild(img);
	    });
	  };

	  Promise.all([loadImg('http://f12.baidu.com/it/u=2881303562,336932824&fm=72'), loadImg('http://img4.imgtn.bdimg.com/it/u=347082810,1094684650&fm=11&gp=0.jpg'), loadImg('http://img3.imgtn.bdimg.com/it/u=4187903139,2134569676&fm=11&gp=0.jpg')]).then(showImgs); //三张图片都加载完了，再一起渲染出来
	  // Promise.all 接受一个数组，数组内的每一项都是 Promise, 每一项里的resolve里的参数会组成一个参数数组
	  // then 方法中能接受到该 参数数组
	}

	{
	  // Promise.race 的应用举例
	  // 有一张图片加载完毕就渲染，(谁加载快就渲染谁)
	  var _loadImg = function _loadImg(url) {
	    return new Promise(function (resolve, reject) {
	      var img = document.createElement('img');
	      img.src = url;
	      img.addEventListener('load', function () {
	        resolve(img); // 要把参数 img 传到下面的步骤去
	      });
	      img.addEventListener('error', function (err) {
	        reject(err);
	      });
	    });
	  };

	  var _showImgs = function _showImgs(img) {
	    var p = document.createElement('p');
	    p.appendChild(img);
	    console.log('img', img);
	    document.body.appendChild(p);
	  };

	  Promise.race([_loadImg('http://f12.baidu.com/it/u=2881303562,336932824&fm=72'), _loadImg('http://img4.imgtn.bdimg.com/it/u=347082810,1094684650&fm=11&gp=0.jpg'), _loadImg('http://img3.imgtn.bdimg.com/it/u=4187903139,2134569676&fm=11&gp=0.jpg')]).then(_showImgs); //三张图片，谁先加载完，就渲染谁
	}

/***/ })
/******/ ]);