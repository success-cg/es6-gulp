import $ from 'jquery';

class Base {
  /**
   * 初始化奖金、玩法、说明
   */
  initPlayList() {
    this.play_list  //play_list 是 map 结构
        .set('r2', {
          bonus: 6,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">6</em>元',
          name: '任二'
        })
        .set('r3', {
          bonus: 19,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">19</em>元',
          name: '任四'
        })
        .set('r4', {
          bonus: 78,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">78</em>元',
          name: '任四'
        })
        .set('r5', {
          bonus: 540,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
          name: '任五'
        })
        .set('r6', {
          bonus: 90,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">90</em>元',
          name: '任六'
        })
        .set('r7', {
          bonus: 26,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">26</em>元',
          name: '任七'
        })
        .set('r8', {
          bonus: 9,
          tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">9</em>元',
          name: '任八'
        });
  }

  /**
   * 初始化号码
   */
  initNumber() {
    for (let i = 1; i < 12; i++) {
      this.number.add((i + '').padStart(2, '0')); //number 是 set 类型，因为不允许投注号码重复，padStart 字符串补全两位，用'0'补全
    }
  }

  /**
   * 设置遗漏数据
   * @param omit {map} 传进来的遗漏数据
   */
  setOmit(omit) {
    /*保存 this 的指向*/
    let self = this;
    /*清空保存的遗漏数据，omit 是一个 map 对象*/
    self.omit.clear();
    /*设置保存的遗漏值为传进来的遗漏值*/
    for (let [index, item] of omit.entries()) {
      self.omit.set(index, item);
    }
    /*使用 jquery 在页面渲染遗漏数据*/
    $(self.omit_el).each(function (index, item) {
      $(item).text(self.omit.get(index));
    });
  }

  /**
   * 设置开奖
   * @param code {set} 传进来的开奖号码，因为开奖号码不能重复，所以用 set 类型
   */
  setOpenCode(code) {
    let self = this;
    /*清空保存的开奖号码*/
    self.open_code.clear();
    /*保存开奖号码*/
    for (let item of code.values()) {
      self.open_code.add(item);
    }
    /*调用更新获奖接口*/
    self.updateOpenCode && self.updateOpenCode.call(self, code);
  }

  /**
   * 号码选中取消
   * @param e {object} 触发的事件
   */
  toggleCodeActive(e) {
    let self = this;
    /*获取选中的 jquery 对象*/
    let $cur = $(e.currentTarget);
    /*切换样式是否激活*/
    $cur.toggleClass('btn-boll-active');
    /*计算选中金额*/
    self.getCount();
  }


}