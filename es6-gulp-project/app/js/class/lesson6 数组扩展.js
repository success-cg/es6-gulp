/**
 * 数组扩展
 */

import 'babel-polyfill'

{
  /**
   * 数组API：Array.of
   */
  let arr = Array.of(3,4,7,9,11);
  console.log(arr); //[3,4,7,9,11]
  //Array.of() 方法创建一个具有可变数量参数的
  //新数组实例，而不考虑参数的数量或类型。

  /**
   *  Array.of() 和 Array 构造函数之间的区别在于处理整数参数
   */
  Array.of(7);       // [7]
  Array.of(1, 2, 3); // [1, 2, 3]
  //Array.of(7) 创建一个具有单个元素 7 的数组

  Array(7);          // [ , , , , , , ]
  Array(1, 2, 3);    // [1, 2, 3]
  //Array(7) 创建一个包含 7 个 undefined 元素的数组。
}

{
  /**
   * 数组API：Array.from
   */
  let p = document.getElementsByTagName('p') //伪数组
  let pArr = Array.from(p)
  //Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
  //换句话说就是让伪数组成为真数组
  pArr.forEach((item) => {
    console.log(item.textContent); //hello world chengong
    //Node.textContent 属性表示一个节点及其后代的文本内容。
  });

  console.log(Array.from([2,5,4], (item)=>{
    return Math.pow(item, 2) //[4,25,16]
    //Array.from()第二个参数的作用和数组的map方法一样
  }));
}

{
  /**
   * 数组API：fill
   */
  console.log('fill-7', [1,'a',undefined].fill(7)); // [7,7,7]
  //fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
  console.log('fill,pos', ['a','b','c'].fill(7,1,3)); // ['a',7,7]
  // arr.fill(value)
  // arr.fill(value, start)
  // arr.fill(value, start, end)
  // 接受3个参数，后两个表示起始和终止的序号，为可选
  // start 默认为 0， end 默认为 this.length
}

{
  /**
   * 数组API：keys values entries
   */
  for (let index of ['a','1','ss'].keys()) {
    console.log('keys', index); // 0 1 2
    //keys() 方法返回一个新的 Array Iterator 对象，它包含数组中每个索引的键(序号)。
  }

  for (let value of ['a','1','ss'].values()) {
    console.log('values', value); // a 1 ss
    //兼容为题，要引入 babel-polyfill
    //values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。
  }

  for (let [index, value] of ['a','1','ss'].entries()) {
    console.log('[index, value]', [index, value]); // [0,'a'] [1,'1'] [2,'ss']
    //entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
    //entries() 方法相当于 keys() 和 values() 方法的结合体
  }
}

{
  /**
   * 数组API：copyWithin
   */
  console.log('copyWithin', [1,2,3,4,5].copyWithin(0,3,4)); //[4, 2, 3, 4, 5]
  //copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
  //语法 arr.copyWithin(target, start, end)
}

{
  /**
   * 数组API：find findIndex
   */
  console.log('find', [1,2,3,4,5,6,7].find((item) => {
    return item > 3
  })); // 4
  //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

  console.log('findIndex', [1,2,3,4,5,6,7].findIndex((item) => {
    return item > 3
  })); // 3
  //findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
}
