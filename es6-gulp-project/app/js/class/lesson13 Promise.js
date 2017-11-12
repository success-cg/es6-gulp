{
  // ES5 中使用回调处理异步操作
  let ajax = function(callback) {
    console.log('执行');
    setTimeout(()=>{
      callback && callback.call()
    }, 1000);
  };

  ajax(()=>{
    console.log('timeout1');
  }) // 先输出'执行'，一秒后输出'timeout1'
}

{
  // 使用 Promise 处理异步操作
  let ajax = function() {
    console.log('执行2');
    return new Promise((resolve, reject)=>{
      //resolve表示要执行下一步的操作，reject表示要中断当前操作
      setTimeout(()=>{
        resolve()
      }, 1000);
    })
  }

  ajax().then(()=>{
    console.log('Promise', 'timeout2');
  }) // 先输出'执行2'，一秒后输出'Promise timeout2'
}

{
  // 多步骤的异步操作
  let ajax = function() {
    console.log('执行3');
    return new Promise((resolve, reject)=>{
      //resolve表示要执行下一步的操作，reject表示要中断当前操作
      setTimeout(()=>{
        resolve()
      }, 1000);
    })
  };

  ajax()
  .then(()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      }, 2000);
    });
  })
  .then(()=>{
    console.log('timeout3');
  })
}

{
  // catch, 捕获异常错误
  let ajax = function(num){
    console.log('执行4');
    return new Promise((resolve,reject)=>{
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(1)
  .then(()=>{  // then 方法执行下一步
    console.log('log', 6);
  })
  .catch(err=>{  // catch 方法捕获错误
    console.log('catch', err);
  })
}
