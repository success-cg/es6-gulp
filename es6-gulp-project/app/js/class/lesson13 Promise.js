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

{
  // Promise.all 的应用举例
  // 所有图片都加载完再添加到页面
  function loadImg(url){
    return new Promise((resolve, reject)=>{
      let img = document.createElement('img');
      img.src = url;
      img.addEventListener('load', ()=>{
        resolve(img) // 要把参数 img 传到下面的步骤去
      })
      img.addEventListener('error', (err)=>{
        reject(err)
      })
    })
  }

  function showImgs(imgs){
    console.log('imgs', imgs);  // [img, img, img]
    imgs.forEach(img=>{
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('http://f12.baidu.com/it/u=2881303562,336932824&fm=72'),
    loadImg('http://img4.imgtn.bdimg.com/it/u=347082810,1094684650&fm=11&gp=0.jpg'),
    loadImg('http://img3.imgtn.bdimg.com/it/u=4187903139,2134569676&fm=11&gp=0.jpg')
  ]).then(showImgs) //三张图片都加载完了，再一起渲染出来
  // Promise.all 接受一个数组，数组内的每一项都是 Promise, 每一项里的resolve里的参数会组成一个参数数组
  // then 方法中能接受到该 参数数组

}

{
  // Promise.race 的应用举例
  // 有一张图片加载完毕就渲染，(谁加载快就渲染谁)
  function loadImg(url){
    return new Promise((resolve, reject)=>{
      let img = document.createElement('img');
      img.src = url;
      img.addEventListener('load', ()=>{
        resolve(img) // 要把参数 img 传到下面的步骤去
      })
      img.addEventListener('error', (err)=>{
        reject(err)
      })
    })
  }

  function showImgs(img){
    let p = document.createElement('p');
    p.appendChild(img);
    console.log('img', img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://f12.baidu.com/it/u=2881303562,336932824&fm=72'),
    loadImg('http://img4.imgtn.bdimg.com/it/u=347082810,1094684650&fm=11&gp=0.jpg'),
    loadImg('http://img3.imgtn.bdimg.com/it/u=4187903139,2134569676&fm=11&gp=0.jpg')
  ]).then(showImgs) //三张图片，谁先加载完，就渲染谁

}
