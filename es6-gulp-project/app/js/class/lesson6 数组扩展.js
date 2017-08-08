/**
 * 数组扩展
 */

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
  console.log('fill-7', [1,'a',undefined].fill(7));
  //fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
  // arr.fill(value)
  // arr.fill(value, start)
  // arr.fill(value, start, end)
  // 接受3个参数，后两个表示起始和终止的序号，为可选
}
