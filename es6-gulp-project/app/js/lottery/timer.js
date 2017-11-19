// 计时器模块

class Timer {
  /**
   * 倒计时方法
   * @param end {number} 截止时间
   * @param update {function} 时间更新的回调，这里是每秒钟页面刷新显示的时间
   * @param handle {function} 倒计时结束后执行的回调，这里是重新获取最新的销售状态
   */
  countdown(end, update, handle) {
    const now = new Date().getTime(); //获取当前时间
    const self = this; //self 获取当前对象的指针
    if (now - end) {  //如果当前时间大于截止时间，说明倒计时已经结束了
      handle.call(self); //执行倒计时结束后的回调
    } else {
      let last_time = end - now;  //当前时间离截止时间的剩余时间
      const px_d = 1000 * 60 * 60 * 24; //一天的毫秒数
      const px_h = 1000 * 60 * 60;  //一小时的毫秒数
      const px_m = 1000 * 60; //一分钟的毫秒数
      const px_s = 1000;  //一秒钟的毫秒数
      let d = Math.floor(last_time / px_d); //剩余天数
      let h = Math.floor((last_time - d * px_d) / px_h);  //剩余小时数
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_m); //剩余分钟数
      let s = Math.floor((last_time - d * px_d - h * px_h * m * px_m) / px_s);  //剩余秒数
      let r = [];  //用数组保存计算结果
      if (d > 0) {
        r.push(`<em>${d}</em>天`);
      }
      if (r.length || h > 0) {
        r.push(`<em>${h}</em>时`);
      }
      if (r.length || m > 0) {
        r.push(`<em>${m}</em>分`);
      }
      if (r.length || s > 0) {
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time = r.join('');
      update.call(self, r.join(''));
      setTimeout(() => {  //一秒钟轮询一次
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer;
