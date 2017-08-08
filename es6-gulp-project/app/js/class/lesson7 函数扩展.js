{
  /**
   * 函数参数默认值
   */
  function test(x,y='world') {
    //参数 y 默认值为 world
    console.log('默认值', x, y);
  }
  test('hello') //hello world
  test('hello', 'cg') //hello cg
}

{
  /**
   * 函数作用域
   */
  let x = 'test';
  function test2(x, y=x) {
    //给y赋值的x,是函数内部作用域的x
    console.log('作用域',x,y);
  }
  test2('hello') //hello hello
  test2() //undefined undefined
}

{
  /**
   * 函数的rest参数，类似 arguments 对象，
   * 把离散的参数转化成伪数组
   * 但是没有 arguments[0] 的问题
   */
  function test3(...arg) {
    console.log(...arg); // 1 2 3 4 'a'
    for (let v of arg) {
      console.log('rest', v); // 1 2 3 4 'a'
    }
  }
  test3(1,2,3,4,'a')
}

{
  /**
   * 扩展运算符，rest参数的逆运算
   * 把数组参数转化成离散的参数
   */
  console.log(...[1,2,4]); //1 2 4
  console.log('a', ...[1,2,4]); //a 1 2 4
}

{
  /**
   * 箭头函数
   */
  let arrow = v => v*2; //没有{}就默认有 return
  console.log('arrow', arrow(3)); //6

  let arrow2 = v => {v*2}; //有{}，则return要明写，不写就相当于没有return
  console.log('arrow2', arrow2(3)); //undefined
}
