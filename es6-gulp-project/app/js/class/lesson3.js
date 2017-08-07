/**
 * 正则扩展
 */

{
  let regex = new RegExp('xyz','i'); //声明正则表达式的方法，可以接收2个参数，都为字符串
  let regex2 = new RegExp(/xyz/i);  //声明正则表达式，可以接收一个正则对象
  console.log(regex.test('xyz123'), regex.test('xyz123'));
  //true true

  let regex3 = new RegExp(/xyz/ig,'i');
  //es6扩展正则表达式，第二个修饰符覆盖前面的修饰符，该式相当于 /xyz/i
  console.log(regex3.flags); // i
  // RegExp.prototype.flags 用来获取正则修饰符
}

{
  //修饰符 y
  let s = 'bbb_bb_b';
  let a1 = /b+/g; //全局匹配，不一定紧跟上一次的匹配结果
  let a2 = /b+/y; //全局匹配，必须从第一个或者上一次的结果开始匹配
  console.log('one', a1.exec(s), a2.exec(s)); // ['bbb'] ['bbb']
  //exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

  console.log('two', a1.exec(s), a2.exec(s)); // ['bb'] null

  console.log('three', a1.sticky, a2.sticky); // false true
  //sticky 方法返回布尔值，是否开启 y 修饰模式
}

{
  //修饰符 u
  console.log('u-1', /^\ud830/.test('\ud830\udc2a')); //true
  console.log('u-2', /^\ud830/u.test('\ud830\udc2a')); //false
  //修饰符u，会把字符串看成整体

  console.log(/\u{61}/.test('a')); false
  console.log(/\u{61}/u.test('a')); true
  //unicode码要加修饰符u，才能被识别，‘a’的unicode码是61
}
