{
  // iterator 接口
  let arr = ['hello','world'];
  let map = arr[Symbol.iterator]();
  console.log(map.next());  // {value: "hello", done: false}
  console.log(map.next());  // {value: "world", done: false}
  console.log(map.next());  // {value: undefined, done: true}
}

{
  // iterator 接口自定义部署，对 object 部署
  let obj = {
    start: [3,5,7],
    end: [9,10,11],
    [Symbol.iterator](){
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next(){
          if(index<len){
            return {
              value: arr[index++],
              done: false
            }
          }else{
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }

  for(let key of obj){
    console.log(key);
  } // 3 5 7 9 10 11
}

{
  // for of 遍历
  let arr = ['hello','world'];
  for(let value of arr){
    console.log('value', value);
  } // hello world
}
