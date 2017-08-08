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
  //最大的安全整数（maxinum safe integer)（253 - 1）
}
