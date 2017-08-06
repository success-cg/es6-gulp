/**
 * 解构赋值
 */

{
  let a, b, rest;
  [a,b]=[1,2] //解构赋值配对来赋值
  console.log(a,b); // 1 2
}

{
  let a, b, rest;
  [a,b,...rest] = [1,2,3,4,5,6]; //解构赋值可以配对成数组
  console.log(a,b,rest); // 1 2 [3,4,5,6]
}

{
  let a, b;
  ({a,b} = {a:1, b:2}) //解构赋值用于对象的赋值
  console.log(a,b); // 1 2
}

{
  let a, b, c, rest;
  [a,b,c=3]=[1,2] //解构赋值可以设置默认值
  console.log(a,b,c); // 1 2 3
}

{
  let a, b, c, rest;
  [a,b,c]=[1,2] //解构赋值没有配对成功，就是undefined
  console.log(a,b,c); // 1 2 undefined
}

{
  let a=1, b=2;
  [a,b] = [b,a] // 解构赋值用于变量交换
  console.log(a,b); // 2 1
}

{
  function fn() {
    return [1,2]
  }
  let a,b;
  [a,b] = fn() //解构赋值用于函数的返回值提取
  console.log(a,b); // 1 2
}

{
  function fn() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a, , ,b] = fn() //解构赋值可以忽略中间值
  console.log(a,b);  //1 4
}

{
  function fn() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a, ...b] = fn() //解构赋值可以返回数组
  console.log(a,b);  //1 [2,3,4,5]
}

{
  let o = {p:42, q:true};
  let {p, q} = o; //解构赋值用于对象的赋值，匹配key赋值value
  console.log(p,q); // 42 true
}

{
  let {a=10, b=5} = {a:3}; //解构赋值用在对象上，可以设置默认值
  console.log(a,b); //3 5
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {title: esTitle, test: [{title: cnTitle}]} = metaData
  //解构赋值可以提取多层级对象的value值，需要把对象结构和key保证
  console.log(esTitle,cnTitle); //abc test
}
