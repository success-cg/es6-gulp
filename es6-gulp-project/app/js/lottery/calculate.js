/*计算模块*/

class Calculate {
  /**
   * 计算注数
   * @param active [number] 当前选中的号码
   * @param play_name [string] 当前的玩法标识
   * @return [number] 注数
   */
  computeCount(active, play_name) {
    let count = 0; //初始注数为0
    const exist = this.play_list.has(play_name); //play_list 玩法列表，map 类型，在别处写好，
    let arr = new Array(active).fill('0'); //生成长度为 active，每个元素为'0'的数组
    if (exist && play_name.at(0) === 'r') {  //玩法存在，并且玩法是组合(玩法名是'r')
      count = Calculate.combine(arr, play_name.split('')[1]); //count 进行组合运算得到，combine为class的static方法，在下面定义
    }
    return count;
  }

  /**
   * 组合运算
   * @param arr [array] 参与组合运算的数组
   * @param size [number] 组合运算的基数
   * @return [number] 计算注数
   * 比如 arr=[1,2,3,4], size=2，结果就是 6 (4C2,4选2)，排列组合
   */
  static combine(arr, size) {
    let allResult = []; //保存最后的结果
    (function f(arr, size, result) {  //立即执行函数，做递归，进行组合运算
      let arrLen = arr.length;
      if (arrLen < size) return; //如果基数大于数组长度，则截止递归运算
      if (arrLen === size) {
        allResult.push([].concat(result, arr));
      } else {
        for (let i = 0; i < arrLen; i++) {
          let newResult = [].concat(result);
          newResult.push(arr[i]);
          if (1 === size) {
            allResult.push(newResult);
          } else {
            let newArr = [].concat(arr);
            newArr.splice(0, i + 1);
            f(newArr, size - 1, newResult);
          }
        }
      }
    })(arr, size, []);
    return allResult.length;
  }
}