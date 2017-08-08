/**
 * 对象扩展
 */

{
  /**
   * 简洁表示法
   */
  //对象简洁写法
  let a = 1;
  let b = 'hello';
  let es5 = {
    a: a,
    b: b
  }
  //对象的key value 一样则可以简写
  let es6 = {
    a,
    b
  }

  console.log(es5, es6); //输出结果一样

  //函数简洁写法
  let es5_method = {
    hello: function() {
      console.log('hello');
    }
  };

  let es6_method = {
    hello() {
      console.log('hello');
    }
  };
  console.log(es5_method.hello(), es6_method.hello()); //输出结果一样
}

{
  /**
   * 属性表达式
   */
  let a = 'b';
  let es5_obj = {
    a: 'c'
  };
  //es6中，对象的key值可以是表达式，用[]包起来
  let es6_obj = {
    [a]: 'c'
  }
  console.log(es6_obj); //{b: 'c'}
}

{
  /**
   * 新增API: Object.is
   * 功能和 '===' 一样
   */
  console.log('字符串', Object.is('abc', 'abc')); //true
  console.log('数组', Object.is([], []), [] === []); //false false
}

{
  /**
   * 新增API：Object.assign
   * 浅拷贝对象，根据key,有就覆盖，没有就添加
   * 只拷贝自身的属性，不拷贝继承的属性
   */
  let obj1 = {a:'a'};
  let obj2 = {b:'b'};
  console.log('拷贝', Object.assign(obj1, obj2)); //{a: "a", b: "b"}
}

{
  /**
   * 新增API：Object.entries
   * Object.entries() 方法返回一个给定对象自己的可枚举属性[key, value]对的数组
   */
  let test = {k: 123, h: 456};
  for (let [key, value] of Object.entries(test)) {
    console.log('[key, value]', [key, value]);
    // ["k", 123]
    // ["h", 456]
  }
}
