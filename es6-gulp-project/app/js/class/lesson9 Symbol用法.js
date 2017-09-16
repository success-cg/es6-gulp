/**
 * Symbol 创造的变量独一无二，
 * 每个从Symbol()返回的symbol值都是唯一的。
 */

{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2); //false
  let a3 = Symbol.for('a3')
  // Symbol.for方法检测是否声明过key值为a3的变量，
  // 如果声明过a3 ，则返回该值，如果没有，则声明之。
  let a4 = Symbol.for('a3')
  console.log('a4 === a3', a4 === a3); //true
}

{
  // Symbol 的作用
  let a1 = Symbol.for('abc')
  // 解决变量冲突
  let obj = {
    [a1]: '123', // es6中，对象的key值可以是表达式，用[]包起来，见lesson8 对象扩展，
    abc: 345,
    c: 456
  }
  console.log('obj', obj);  //{abc: 345, c: 456, Symbol(abc): "123"}

  // 使用Symbol作为key值，使用for in、let of 方法是取不到这个值的
  for(let [key, value] of Object.entries(obj)) { //Object.entries 见lesson8
    console.log('let of', key, value);
  }
  // 打印结果
  // abc 345
  // c 456

  // 可以使用Object.getOwnPropertySymbols方法获取 Symbol 作为key的属性
  Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log('Object.getOwnPropertySymbols', item, obj[item]);
    //只获取 Symbol 作为key的值
    //Symbol(abc) "123"
  })

  //可以使用 Reflect.ownKeys 方法获取所有的key值，包括Symbol和普通的
  Reflect.ownKeys(obj).forEach(item=>{
    console.log( 'Reflect.ownKeys', item, obj[item]);
  })
  // 打印结果
  // abc 345
  // c 456
  // Symbol(abc) "123"
}
