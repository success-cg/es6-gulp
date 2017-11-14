  /**
   *  Decorator 意味修饰器，官方解释：
   *  Decorator(修饰器) 是一个函数，用来修改类的行为
   *  强调三个点:
   *  1.修饰器是一个函数，
   *  2.修改行为 (扩展类的功能)，
   *  3.修改是类的行为 (只在类这个范畴内有用，其他地方不能用)
   */

  //  babel-polyfill 补丁不支持 Decorator,
  //  需要 babel-plugin-transform-decorators-legacy 这个插件,
  //  并在 babelrc 配置文件中加入插件配置

  // 第三方 Decorator 修饰器的库： core-decorators;
  // npm install core-decorators --save-dev
  console.log('core-decorators', require('core-decorators'));
  // const {readonly} = require('core-decorators');
  import {readonly} from 'core-decorators';


{
  // Decorator 修饰器应用实例，修改 class 类的属性为只读，不能修改
  // let readonly = function(target, name, descriptor){
  //   // target 为修改的类本身，name 为修改的属性， descriptor 为该属性的描述对象
  //   descriptor.writable = false;
  //   return descriptor
  // }

  // 修饰器放在 class 里面，要放在属性的紧前面
  class Test {
    @readonly   // 修饰器，应用后，time 属性只可读，不可修改, 只修饰后面紧跟的一个属性
    time(){
      return '2017-11-13';
    }

    @readonly
    name(){
      return 'cg'
    }
  }

  let test = new Test();
  // test.time = () => 'reset time';   // 报错，不能修改 time 属性
  // test.name = () => 'ly';  // 报错，不能修改 time 属性
  console.log('time', test.time());
  console.log('name',test.name());
}

{
  // Decorator 修饰器放在 class 前面
  let typename = function(target, name, descriptor){
    target.myname = 'cg';
  }

  @typename // Decorator 修饰 class 要放在紧前面，为 class 添加了一个静态属性 myname
  class Test {};

  console.log('typename', Test.myname);
}

{
  // Decorator 应用实例，广告埋点
  // class 里面的方法先执行，埋点逻辑后执行，业务解耦
  let log = function(type){
    return function(target, name, descriptor){
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        // 类里面的方法
        src_method.apply(target, arg);
        // 具体的埋点逻辑，用下面的输出替代一下
        console.log(`log ${type}`); // 埋点逻辑抽离解耦，可模块化复用
      }
    }
  }

  class AD {
    @log('show')
    show(){
      console.log('ad is show');
    }

    @log('click')
    click(){
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();  // ad is show, log show
  ad.click(); // ad is click, log click
  // class 里面的方法先执行，埋点逻辑后执行，业务解耦

}
