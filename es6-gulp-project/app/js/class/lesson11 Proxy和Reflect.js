{
  let obj = {
    time: '2017-11-11',
    name: 'cg',
    _r: 123
  }

  let monitor = new Proxy(obj, {
    // 代理对象属性的读取，替换返回值里的'2017'为'2018'
    get(target, key, proxy) {
      //target为代理的obj，key为访问的key, proxy为monitor
      console.log(`target: ${target === obj},key: ${key}`); //target: true,key: time
      console.log(proxy === monitor); //true
      return target[key].replace('2017', '2018') //拦截读取操作，把返回的结果里的‘2017’换成'2018'
    },

    // 代理对象设置属性，只能修改'name'的 value
    set(target, key, value, proxy) {
      //target为代理的obj,key为访问的key,value为要修改的值，proxy为monitor
      console.log('set-arguments', arguments); //arguments的长度为2
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key]
      }
    },

    // 代理key in Object操作，只有name属性可以查到，其他属性查不到
    has(target, key) {
      //target为代理的obj，key为访问的key
      console.log('has-arguments', arguments); //arguments的长度为2
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },

    // 代理delete,只能删除 '_' 存在的属性
    deleteProperty(target, key, ) {
      console.log('delete-arguments', arguments); //arguments的长度为2
      if(key.indexOf('_')>-1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    }

  });

  console.log('get', monitor.time); // 2018-11-11
  monitor.name = 'ly';
  monitor._r = 456;
  console.log('set', monitor); //name设置成了'ly',而_r仍然为123，没有变成456
  console.log('has','name' in monitor, 'time' in monitor); // true false 只能查到name，隐藏了time和_r

  delete monitor.time;
  delete monitor._r
  console.log('delete', monitor); //time属性没有删除，_r属性删除了
}
