{
  let list = new Set()
  list.add(5)
  list.add(7)
  //size方法获取 list 的元素个数, 类似数组的length
  console.log('size', list.size); // 2
}

{
  let arr = [1,2,3,4,5]
  let list = new Set(arr)
  console.log('size', list.size); // 5
}

{
  // Set 数据是独一无二的，意味不重复
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)
  console.log('list', list);

  // Set 可以用来做数组去重
  let arr = [1,2,3,1,2]
  let list2 = new Set(arr)


  console.log('unique', list2); // {1, 2, 3}
}

{
  // Set 的API
  let arr = ['add','delete','clear','has']
  let list = new Set(arr)

  console.log('has');
}
