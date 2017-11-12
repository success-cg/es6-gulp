{
  // Set 数据类型
  let list = new Set();
  list.add(5);
  list.add(7)
  //size方法获取 list 的元素个数, 类似数组的length
  console.log('size', list.size); // 2
}

{
  let arr = [1, 2, 3, 4, 5]
  let list = new Set(arr)
  console.log('size', list.size); // 5
}

{
  // Set 数据是独一无二的，意味不重复
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);

  // Set 可以用来做数组去重
  let arr = [1, 2, 3, 1, 2]
  let list2 = new Set(arr);
  console.log('unique', list2); // {1, 2, 3}
}

{
  // Set 的API，has,delete
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  console.log('has', list.has('add')); //true,    list里面有'add'元素
  console.log('delete', list.delete('add'), list);
  //true, ["delete", "clear", "has"],    delete成功返回true,
}

{
  // Set遍历元素
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  for (let key of list.keys()) {
    console.log('keys', key);
  } //'add', 'delete', 'clear', 'has'

  for(let value of list.values()){
    console.log('values', value);
  } //'add', 'delete', 'clear', 'has'

  for(let value of list){ //默认返回的是value
    console.log('values', value);
  } //'add', 'delete', 'clear', 'has'

  for (let [key, value] of list.entries()){
    console.log('entries', {key,value});
  }
  // {key: "add", value: "add"}
  // {key: "add", value: "add"}
  // {key: "clear", value: "clear"}
  // {key: "has", value: "has"}

  list.forEach(item=>console.log(item));
  // 'add', 'delete', 'clear', 'has'
}

{
  // 使用set 做数组去重
  var arr = [1,2,5,3,3,3,1,10,10];
  var arrSet = new Set(arr);
  console.log(new Array(...arrSet)); // [1, 2, 5, 3, 10]
  console.log([...arrSet]);          // [1, 2, 5, 3, 10]
  console.log(Array.from(arrSet));   // [1, 2, 5, 3, 10]
  console.log([...new Set(arr)]);    // [1, 2, 5, 3, 10]
}

{
  // WeakSet 数据类型
  /**
   * WeakSet 和 Set 的区别：
   * 1.支持的元素类型不一样：weakSet 的元素只能是引用类型
   * 2.weakSet 中的对象是弱引用，存的是地址，不会检测改地址的内容是否被垃圾回收掉了
   * 3.weakSet 没有 clear,size,不能遍历
   */
  let weakList = new WeakSet();
  let arg = {};
  weakList.add(arg); //weakSet中的元素只能是引用类型
  weakList.add(function(){});
  weakList.add([])
  console.log(weakList); // [Object, function, Array]
}

{
  // Map 数据类型, key 可以是任何数据类型
  // Map 的第一种定义方式
  let map = new Map();
  let arr = [1,2,3];
  map.set(arr, 456);
  console.log('map', map); // key 为 [1,2,3], value 为 456
  console.log('map.get', map.get(arr));  //456
}

{
  // Map 的第二种定义方式
  // Map 的 api 有['set', 'size', 'delete', 'clear', 'has']
  let map = new Map([['a',123],['b',456]]);
  console.log('map args', map); //{"a" => 123, "b" => 456}
  console.log('size', map.size); // 2
  console.log('delete', map.delete('a'), map);
  // true ,delete成功返回true，  {"b" => 456}
  console.log('has', map.has('b')); // true
  console.log('clear', map.clear(), map);
  // undefined, clear成功返回undefined, {}
}

{
  // WeakMap 数据类型
  /**
   * WeakMap 和 Map 的区别：
   * 1.支持的元素类型不一样: WeakMap 中的key只能是引用类型
   * 2.weakSet 中的key是弱引用，存的是地址，不会检测改地址的内容是否被垃圾回收掉了
   * 3.weakSet 没有 clear,size,不能遍历
   */
  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, 123);
  console.log('WeakMap.get', weakMap.get(obj)); // 123
}
