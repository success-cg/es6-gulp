// ES6 兼容插件
import babel from 'babel-polyfill';

// 引入彩票业务
import Lottery from './lottery.js';


// import './class/lesson1 let const.js';
// import './class/lesson2 解构赋值.js';
// import './class/lesson3 正则扩展.js';
// import './class/lesson4 字符串扩展.js';
// import './class/lesson6 数组扩展.js';
// import './class/lesson7 函数扩展.js';
// import './class/lesson10 set-map数据结构.js';
// import './class/lesson11 Proxy和Reflect.js';
// import './class/lesson12 class类.js';
// import './class/lesson13 Promise.js';
// import './class/lesson14 Iterator.js';
// import './class/lesson15 Generator.js';
// import './class/lesson16 Decorator.js';

// import {name, test, Person} from './class/lesson17 模块化.js';
// // 具名导入，需要用对象的解构赋值
// console.log({
//   name,
//   test,
//   Person
// });   // {name: "cg", test: ƒ, Person: ƒ}
//
// import * as me from './class/lesson17 模块化.js';
// // 具名的全部倒入, * 表示全部导入，as 是关键字，表示起别名，这里别名为 me
//
// console.log('me', me, {
//   name: me.name,
//   test: me.test,
//   Person: me.Person
// });  // {name: "cg", test: ƒ, Person: ƒ}
//
// import xxx from './class/lesson17 模块化.js';
// // 匿名的全部倒入，可以自己给模块起名，推荐！！！
// console.log('default', xxx);
