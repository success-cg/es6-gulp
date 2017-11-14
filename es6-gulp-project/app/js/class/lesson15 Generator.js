{
  // Generator 基本定义
  // Generator 返回的是 iterator 接口
  let tell = function* (){
    yield 'a';
    yield 'b';
    return 'c';
  };

  let k = tell();

  console.log(k);         //  Generator {_invoke: ƒ}
  console.log(k.next());  //  {value: "a", done: false}
  console.log(k.next());  //  {value: "b", done: false}
  console.log(k.next());  //  {value: "c", done: true}
  console.log(k.next());  //  {value: undefined, done: true}
}

{
  // Generator 部署 Iterator 接口，实现 for of 遍历
  let obj = {};
  obj[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }

  for(let value of obj){
    console.log('value', value);
  } // 1 2 3
}

{
  // Generator 实际应用，状态机(几种状态循环)
  let state = function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }

  let status = state();
  console.log(status.next()); //  {value: "A", done: false}
  console.log(status.next()); //  {value: "B", done: false}
  console.log(status.next()); //  {value: "C", done: false}
  console.log(status.next()); //  {value: "A", done: false}
  console.log(status.next()); //  {value: "B", done: false}

}

{
  // async 是 Generator 的语法糖，结果是一样的，这里演示不了，需要装 babel 插件
  // let state = async function (){
  //   while(1){
  //     await 'A';
  //     await 'B';
  //     await 'C';
  //   }
  // }
  //
  // let status = state();
  // console.log(status.next()); //  {value: "A", done: false}
  // console.log(status.next()); //  {value: "A", done: false}
  // console.log(status.next()); //  {value: "A", done: false}
  // console.log(status.next()); //  {value: "A", done: false}
  // console.log(status.next()); //  {value: "A", done: false}

}

{
  // Generator 应用实例，抽奖，使代码更加优雅

  // 抽奖业务模块独立出来
  let draw = function(count){
    // 具体的抽奖业务逻辑
    console.log(`抽奖剩余${count}次`);
  }

  // 使用 Generator 函数校验抽奖次数
  let residue = function* (count) {
    while(count>0){
      yield draw(count--);
      // count -- ;
    }
  }

  // 执行抽奖
  let start = residue(5);

  // 添加抽奖按钮
  let btn = document.createElement('button');
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  btn.addEventListener('click', ()=>{
    start.next()
  })
}

{
  // Generator 应用实例，长轮询，模拟不断请求 ajax
  // 定义 generator 函数
  let ajax = function* (){
    yield new Promise((resolve, reject)=>{
      // 模拟 ajax 的业务逻辑, 应用中替换为 ajax 请求真实的接口
      setTimeout(()=>{
        resolve({code: 0 }); // 模拟返回接口的状态码
      }, 200);
    })
  }

  // 定义轮询函数
  let pull = function(){
    let generator = ajax();
    let step = generator.next();
    step.value.then(function(d){
      if (d.code!==0) { // 判断接口的状态码
        setTimeout(()=>{
          console.info('wait');
          pull()
        }, 1000);
      } else {
        console.info(d);
      }
    })
  }

  pull();

}
