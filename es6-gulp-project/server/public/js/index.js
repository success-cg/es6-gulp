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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  // 基本定义和生成实例
	  var Parent = function Parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	    _classCallCheck(this, Parent);

	    this.name = name;
	  };

	  var v_parent = new Parent('v');
	  console.log('构造函数和实例', v_parent);
	  // Parent {name: "v"}
	}

	{
	  // 继承,关键字 extends
	  var _Parent = function _Parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	    _classCallCheck(this, _Parent);

	    this.name = name;
	  };

	  var Child = function (_Parent2) {
	    _inherits(Child, _Parent2);

	    function Child() {
	      _classCallCheck(this, Child);

	      return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
	    }

	    return Child;
	  }(_Parent);

	  console.log('继承', new Child()); // Child {name: "cg"}
	}

	{
	  // 继承,传递参数，关键字 super 方法
	  var _Parent3 = function _Parent3() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	    _classCallCheck(this, _Parent3);

	    this.name = name;
	    this.age = 18;
	  };

	  var _Child = function (_Parent4) {
	    _inherits(_Child, _Parent4);

	    function _Child() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';
	      var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

	      _classCallCheck(this, _Child);

	      //必须在使用this关键字之前使用，否则报错
	      // super 方法调用父类的构造函数,即调用 this.name = name; this.age = 18;
	      // super 内的参数，与父类中参数是一致的，即name, age
	      var _this2 = _possibleConstructorReturn(this, (_Child.__proto__ || Object.getPrototypeOf(_Child)).call(this, name, age));

	      _this2.type = 'child'; //子类自己的属性
	      return _this2;
	    }

	    return _Child;
	  }(_Parent3);

	  console.log('继承', new _Child()); // _Child {name: "child", age: 18, type: "child"}
	}

	{
	  // getter, setter 读写方法
	  var _Parent5 = function () {
	    function _Parent5() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	      _classCallCheck(this, _Parent5);

	      this.name = name;
	      this.age = 18;
	    }

	    _createClass(_Parent5, [{
	      key: 'longName',
	      get: function get() {
	        // 注意，这里的longName是属性，不是方法
	        return 'mk' + this.name;
	      },
	      set: function set(value) {
	        // 注意，这里的longName是属性，不是方法
	        this.name = value;
	      }
	    }]);

	    return _Parent5;
	  }();

	  var v = new _Parent5();
	  console.log('getter', v.longName); // mkcg
	  v.longName = 'ly';
	  console.log('setter', v.longName); // mkly
	}

	{
	  // static 静态方法
	  var _Parent6 = function () {
	    function _Parent6() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	      _classCallCheck(this, _Parent6);

	      this.name = name;
	      this.age = 18;
	    }

	    _createClass(_Parent6, null, [{
	      key: 'tell',
	      value: function tell() {
	        // 声明静态方法 tell, 调用要用类，而不是实例
	        console.log('hello world');
	      }
	    }]);

	    return _Parent6;
	  }();

	  _Parent6.tell(); // 'hello world'
	  // 要用class声明的类来调用static声明的静态方法，而不是用new出来的实例调用
	}

	{
	  // 静态属性
	  var _Parent7 = function () {
	    function _Parent7() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cg';

	      _classCallCheck(this, _Parent7);

	      this.name = name;
	      this.age = 18;
	    }

	    _createClass(_Parent7, [{
	      key: '_self',
	      value: function _self() {
	        // 私有方法
	        return 'self';
	      }
	    }]);

	    return _Parent7;
	  }();

	  _Parent7.type = 'test'; // 直接在类上添加静态方法

	  console.log('静态属性', _Parent7.type); // test
	  console.log('私有方法', new _Parent7()._self()); // self
	}

/***/ })
/******/ ]);