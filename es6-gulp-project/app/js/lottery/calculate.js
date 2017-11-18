/*计算模块*/

class Calculate {
  /**
   * 计算注数
   * @param active {number} 当前选中的号码
   * @param play_name {string} 当前的玩法标识
   * @return {number} 注数
   */
  computeCount(active, play_name) {
    let count = 0; //初始注数为0
    const exist = this.play_list.has(play_name); //play_list 玩法列表，set 类型，在别处写好，
    let arr = new Array(active).fill('0'); //生成长度为 active，每个元素为'0'的数组
    if (exist && play_name.at(0) === 'r') {  //玩法存在，并且玩法是组合(玩法名是'r')
      count = Calculate.combine(arr, play_name.split('')[1]); //count 进行组合运算得到，combine为class的static方法，在下面定义
    }
    return count;
  }

  /**
   * 计算奖金范围
   * @param active [number] 当前选中的号码
   * @param play_name [string] 当前玩法标识
   * @return {Array} 奖金范围
   */
  computeBonus(active, play_name) {
    const play = play_name.split('');
    const self = this;
    let arr = new Array(play[1] * 1).fill(0);
    let min, max;
    if (play[0] === 'r') {
      let min_active = 5 - (11 - active);
      if (min_active > 0) {
        if (min_active - play[1] >= 0) {
          arr = new Array(min_active).fill(0);
          min = Calculate.combine(arr, play[1]);
        } else {
          if (play[1] - 5 > 0 && active - play[1] >= 0) {
            arr = new Array(active - 5).fill(0);
            min = Calculate.combine(arr, play[1] - 5);
          } else {
            min = active - play[1] > -1 ? 1 : 0;
          }
        }
      } else {
        min = active - play[1] > -1 ? 1 : 0;
      }

      let max_active = Math.min(active, 5);
      if (play[1] - 5 > 0) {
        if (active - play[1] >= 0) {
          arr = new Array(active - 5).fill(0);
          max = Calculate.combine(arr, play[1] - 5);
        } else {
          max = 0;
        }
      } else if (play[1] - 5 < 0) {
        arr = new Array(Math.min(active, 5)).fill(0);
        max = Calculate.combine(arr, play[1]);
      } else {
        max = 1;
      }
    }
    return [min, max].map(item => item * self.play_list.get(play_name).bonus);
  }

  /**
   * 组合运算
   * @param arr {Array} 参与组合运算的数组
   * @param size {Number} 组合运算的基数
   * @return {Number} 计算注数
   * 比如 arr=[1,2,3,4], size=2，结果就是 6 (4C2,4选2)，排列组合
   */
  static combine(arr, size) {
    let allResult = []; //保存最后的结果
    (function f (arr, size, result) {  //立即执行函数，做递归，进行组合运算
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

export default Calculate;