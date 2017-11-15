/**
 *  ES6 模块化
 */

// *************************

// 具名 export 导出
export let name = 'cg';

export function test(){
  console.log('test');
}

export class Person {
  constructor(name='ly', age=18){
    this.name = name;
    this.age = age;
  }

  say(){
    console.log('say', this.name);
  }
}

// *************************

// 匿名 export 导出
let student = '小明';

function play(){
  console.log('play game');
}

class school {
  constructor(teacher='frank', lesson='English'){
    this.teacher = teacher;
    this.lesson = lesson;
  }
}

export default {
  student,
  play,
  school
}
