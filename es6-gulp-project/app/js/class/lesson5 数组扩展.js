/**
 * 数组扩展
 */

{
  console.log(0b111110111); //503
  console.log(0B111110111); //503
  //二进制数以 0b 或 0B 开头，大小写均可

  console.log(0o767); // 503
  console.log(0O767); // 503
  //八进制，以 0o 或 0O 开头，大小写均可
}

{
  console.log('15', Number.isFinite(15)); //true
  //Number.isFinite()方法用来检测传入的参数
  //是否是一个有穷数（finite number）

  console.log('NaN', Number.isFinite(NaN)); //false
  //NaN不是一个数，不是有穷数
  console.log('1/0', Number.isFinite(1/0)); //false
  //'1/0'为无穷大，不是有穷数

  console.log('isNaN', Number.isNaN(NaN)); //true
  console.log('isNaN', Number.isNaN(0)); //false
  //顾名思义，isNaN判断一个数是否是NaN
}

{
  console.log('25', Number.isInteger(25)); //true
  console.log('25.0', Number.isInteger(25.0)); //true
  console.log('25.1', Number.isInteger(25.1)); //false
  //Number.isInteger() 方法用来判断给定的参数是否为整数,
  console.log('25', Number.isInteger('25')); //false
  //接受的参数必须是Number,字符串不会转化
}

{
  console.log('MAX', Number.MAX_SAFE_INTEGER); //9007199254740991
  //Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中
  //最大的安全整数（maxinum safe integer)（2^53 - 1）
  console.log('MIN', Number.MIN_SAFE_INTEGER); // -9007199254740991
  //Number.MIN_SAFE_INTEGER 代表在 JavaScript 中
  //最小的安全整数 (-(2^53 - 1)).
  console.log('safe', Number.isSafeInteger(10)); //true
  console.log('safe', Number.isSafeInteger('a')); //false
  //Number.isSafeInteger() 方法用来判断传入的参数值
  //是否是一个“安全整数”, 只接受 Number 类型，
  //安全整数范围为 -(253 - 1) 到 253 - 1 之间的整数，
  //包含 -(253 - 1)和 253 - 1。
}

{
  console.log('4.1', Math.trunc(4.1)); // 4
  console.log('4.9', Math.trunc(4.9)); // 4
  //Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。
}

{
  console.log('-5', Math.sign(-5)); // -1
  console.log('0', Math.sign(0)); // 0
  console.log('5', Math.sign(5)); // 1
  console.log('String -5', Math.sign('-5')); // -1
  console.log('foo', Math.sign('foo')); // NaN
  //Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零。
  //接受参数为 Number 类型，String 类型会进行隐式转换, 转换不了数字则返回NaN
}

{
  /**
   * 立方根API
   */
  console.log('-1的立方根', Math.cbrt(-1)); // -1
  console.log('-8的立方根', Math.cbrt(-8)); // -2
  // Math.cbrt() 函数返回任意数字的立方根
}
