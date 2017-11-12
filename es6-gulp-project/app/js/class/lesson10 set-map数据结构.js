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

{
  // Map Array 横向对比api：增，查，改，删
  let map = new Map();
  let array = [];

  // 增
  map.set('t',1);
  array.push({t:1});
  console.info('map-array增', map, array);
  // {"t" => 1},  [{t: 1}]

  // 查
  let map_exist = map.has('t');
  let array_exist = array.find(item=>item['t'])
  console.info('map-array查', map_exist, array_exist);
  // true, {t: 1}, map 的 has 方法返回Boolean, array 的 find 方法返回该元素(undefined)

  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array改', map, array);
  // {"t" => 2},  [{t: 2}]

  // 删
  map.delete('t');
  let index = array.findIndex(item=>item.t)
  array.splice(index, 1)
  console.info('map-array删', map, array);
  // {}, []

  /**
   * 总结，Map 比 Array 更好用，增删改查非常方便
   */
}

{
  // Set Array 横向对比api：增，查，改，删
  let set = new Set();
  let array = [];
  let obj = {t: 1};

  // 增
  set.add(obj);
  array.push(obj);
  console.info('set-array增', set, array);
  // {t: 1},  [{t: 1}]

  // 查
  let set_exist = set.has(obj);
  let array_exist = array.find(item=>item.t)
  console.info('set-array查', set_exist, array_exist);
  // true, {t:1} ,set 的 has 方法返回Boolean值，array的find方法返回该元素

  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array改', set, array);
  // {t: 2},  [{t: 2}]

  // 删
  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item=>item.t);
  array.splice(index, 1);
  console.info('set-array删', set, array);
  // {}, []

  /**
   * 总结：set 和 array 的增删改查都比较麻烦，还是 map 最方便
   */
}

{
  // map set object 的横向对比：增，查，改，删
  let item = {t: 1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  map.set('t', 1);
  set.add(item);
  obj.t = 1;
  console.info('map-set-obj增', map, set, obj);
  // Map(1) {"t" => 1} ,Set(1) {{t: 1}}, {t: 1}

  // 查
  console.log({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  });
  // true, true, true

  // 改
  map.set('t', 2);
  item.t = 2;
  obj.t = 2;
  console.log('map-set-obj改', map, set, obj);
  // Map(1) {"t" => 2} ,Set(1) {{t: 2}}, {t: 2}

  // 删
  map.delete('t');
  set.delete(item);
  delete obj.t;
  console.log('map-set-obj删', map, set, obj);
  // Map(0) {} ,Set(0) {} ,{}

  /**
   * 总结，
   * 1. map,set,objext 三者，map 的增查改删最方便
   * 2. 开发中，优先使用 map ，因为增查改删最方便
   * 3. 如果数据要求不重复，就用 set
   * 4. ES6 推荐使用 map，set,尽量放弃使用object
   */
}
