{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
  // Parent {name: "v"}
}

{
  // 继承,关键字 extends
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
    }
  }

  class Child extends Parent {}

  console.log('继承', new Child()); // Child {name: "cg"}
}

{
  // 继承,传递参数，关键字 super 方法
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
      this.age = 18;
    }
  }

  class Child extends Parent {
    constructor(name = 'child', age = 30) {
      super(name, age); //必须在使用this关键字之前使用，否则报错
      // super 方法调用父类的构造函数,即调用 this.name = name; this.age = 18;
      // super 内的参数，与父类中参数是一致的，即name, age
      this.type = 'child'; //子类自己的属性
    }
  }

  console.log('继承', new Child()); // _Child {name: "child", age: 18, type: "child"}
}

{
  // getter, setter 读写方法
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
      this.age = 18;
    }

    get longName() { // 注意，这里的longName是属性，不是方法
      return 'mk' + this.name;
    }

    set longName(value) { // 注意，这里的longName是属性，不是方法
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName); // mkcg
  v.longName = 'ly';
  console.log('setter', v.longName); // mkly
}

{
  // static 静态方法
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
      this.age = 18;
    }

    static tell() { // 声明静态方法 tell, 调用要用类，而不是实例
      console.log('hello world');
    }
  }

  Parent.tell() // 'hello world'
  // 要用class声明的类来调用static声明的静态方法，而不是用new出来的实例调用
}

{
  // 静态属性
  class Parent {
    constructor(name = 'cg') {
      this.name = name;
      this.age = 18;
    }

    _self(){ // 私有方法
      return 'self'
    }
  }

  Parent.type = 'test'; // 直接在类上添加静态方法

  console.log('静态属性', Parent.type); // test
  console.log('私有方法', new Parent()._self()); // self

}
