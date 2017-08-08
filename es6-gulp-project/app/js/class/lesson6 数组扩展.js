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
  })
}
