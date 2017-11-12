// Proxy 的用法
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
    deleteProperty(target, key) {
      console.log('delete-arguments', arguments); //arguments的长度为2
      if (key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },

    //代理 Object.keys ,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target) { //target为代理的obj
      console.log('ownKeys-arguments', arguments); //arguments的长度为1
      return Object.keys(target).filter(item => item !== 'time')
    }
  });

  console.log('get', monitor.time); // 2018-11-11
  monitor.name = 'ly';
  monitor._r = 456;
  console.log('set', monitor); //name设置成了'ly',而_r仍然为123，没有变成456
  console.log('has', 'name' in monitor, 'time' in monitor); // true false 只能查到name，隐藏了time和_r

  console.log('ownKeys', Object.keys(monitor)); //["name", "_r"], time被隐藏了
  delete monitor.time;
  delete monitor._r;
  console.log('delete', monitor); //time属性没有删除，_r属性删除了
}

//Reflect 的用法,用法api和Proxy一样
{
  let obj = {
    time: '2017-11-11',
    name: 'cg',
    _r: 123
  }

  console.log('Reflect get', Reflect.get(obj, 'time')); //2017-11-11
  //Reflect 的 set 方法
  Reflect.set(obj, 'name', 'mukewang')
  console.log(obj.name); //mukewang
  console.log('Reflect has', Reflect.has(obj, 'name')); //true
}

// Proxy 和 Reflect 的实际应用例子，对数据做校验，可以做解耦，非常方便
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key]
          console.log(va);
          if (!!va(value)) { //只要该属性符合校验，才能set设置
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key}不存在`)
        }
      }
    })
  }

  // 校验规则
  const personValidators = {
    name(val) {
      //set的name必须为string类型
      return typeof val === 'string'
    },
    age(val) {
      //set的age必须为number且大于18
      return typeof val === 'number' && val > 18
    }
    // ... 增加新的校验规则，比如
    // mobile(val) {...}
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      // 重点！返回代理的Proxy对象
      return validator(this, personValidators);
    }
  }

  const person = new Person('lilei', 30);
  person.age =  20 //set的age必须为number且大于18
  person.name = '9527'; //set的name必须为string类型
  console.log(person);
}
