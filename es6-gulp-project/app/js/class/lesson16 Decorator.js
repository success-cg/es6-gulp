{
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
}

{
  // Decorator 修饰器应用实例，修改 class 类的属性为只读，不能修改
  let readonly = function(target, name, descriptor){
    // target 为修改的类本身，name 为修改的属性， descriptor 为该属性的描述对象
    descriptor.writable = false;
    return descriptor
  }

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
  // test.name = ()=>'ly';  // 报错，不能修改 time 属性
  console.log('time', test.time());
  console.log('name',test.name());
}
