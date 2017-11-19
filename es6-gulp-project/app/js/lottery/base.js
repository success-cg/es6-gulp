// import 'babel-polyfill';
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
      /*number 是 set 类型，因为不允许投注号码重复，padStart 字符串补全两位，用'0'补全*/
      this.number.add((i + '').padStart(2, '0'));
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
    console.log('code', code);
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

  /**
   * 切换玩法
   * @param e {object} 触发的事件
   */
  changePlayNav(e) {
    let self = this;
    /*获取选中的 jquery 对象*/
    let $cur = $(e.currentTarget);
    /*当前选中项添加激活样式，其余的项取消激活*/
    $cur.addClass('active').siblings().removeClass('active');
    /*获取玩法代号，小写，r 标识任选*/
    self.cur_play = $cur.attr('desc').toLocaleLowerCase();
    /*更新 DOM 中的玩法说明*/
    $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
    /*去掉号码选中的样式*/
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    /*计算选中金额*/
    self.getCount();
  }

  /**
   * 操作区，全选、选大、选小、奇数、偶数
   * @param e {object} 触发的事件
   */
  assistHandle(e) {
    e.preventDefault();
    let self = this;
    let $cur = $(e.currentTarget);
    let index = $cur.index();
    let $bollList = $('.boll-list .btn-boll');
    /*操作前先清空选号列表的激活状态*/
    $bollList.removeClass('btn-boll-active');
    /*全选，激活全部*/
    if (index === 0) {
      $bollList.addClass('btn-boll-active');
    }
    /*选大，激活大于5的*/
    if (index === 1) {
      $bollList.each((index, item) => {
        if (item.textContent - 5 > 0) {
          $(item).addClass('btn-boll-active');
        }
      });
    }
    /*选小，激活小于6的*/
    if (index === 2) {
      $bollList.each((index, item) => {
        if (item.textContent - 6 < 0) {
          $(item).addClass('btn-boll-active');
        }
      });
    }
    /*奇数，激活奇数*/
    if (index === 3) {
      $bollList.each((index, item) => {
        if (item.textContent % 2 === 1) {
          $(item).addClass('btn-boll-active');
        }
      });
    }
    /*偶数，激活偶数*/
    if (index === 4) {
      $bollList.each((index, item) => {
        if (item.textContent % 2 === 0) {
          $(item).addClass('btn-boll-active');
        }
      });
    }
    /*计算选中金额*/
    self.getCount();
  }

  /**
   * 获取当前彩票名称
   * @return {*}
   */
  getName() {
    return this.name;
  }

  /**
   * 添加号码
   */
  addCode() {
    let self = this;
    let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
    let active = $active ? $active.length : 0;
    console.log('active', active);
    console.log('self.cur_play', self.cur_play);
    let count = self.computeCount(active, self.cur_play);
    console.log('count', count);

    if (count) {
      self.addCodeItem($active.join(' '), self.cur_play, self.play_list.get(self.cur_play).name, count);
    }
  }

  /**
   * 添加单次号码
   * @param code {string} 添加的号码
   * @param type {string} 类型
   * @param typeName {string} 类型名称
   * @param count {number} 注数
   */
  addCodeItem(code, type, typeName, count) {
    let self = this;
    /*模板字符串购物车选中号码的列表显示*/
    const tpl = `
      <li codes="${type}|${code}" bonus="${count * 2}" count="${count}">
        <div class="code">
          <b>${typeName}${count > 1 ? '复式' : '单式'}</b>
          <b class="em">${code}</b>
          [${count}注，<em class="code-list-money">${count * 2}</em>元]
        </div>
      </li>
    `;
    /*渲染购物车号码的字符串模板*/
    console.log(tpl);
    $(self.cart_el).append(tpl);
    self.getTotal();
  }

  /**
   * 计算选中金额
   */
  getCount() {
    let self = this;
    let active = $('.boll-list .btn-boll-active').length;
    /*计算注数*/
    let count = self.computeCount(active, self.cur_play);
    /*计算奖金范围*/
    let range = self.computeBonus(active, self.cur_play);
    /*计算花的钱数*/
    let money = count * 2;
    /*计算盈利金钱范围*/
    let win1 = range[0] - money;
    /*最小盈利金钱*/
    let win2 = range[1] - money;
    /*最大盈利金钱*/
    let tpl;
    /*保存亏损的钱*/
    let c1 = (win1 < 0 && win2 < 0) ? Math.abs(win1) : win1;
    let c2 = (win1 < 0 && win2 < 0) ? Math.abs(win2) : win2;
    /*如果注数为0*/
    if (count === 0) {
      tpl = `您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元`;
      /*如果奖金的范围上下限一样*/
    } else if (range[0] === range[1]) {
      tpl = `您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元 <em>若中奖，奖金：
            <strong class="red">${range[0]}</strong>元，
            您将${win1 >= 0 ? '盈利' : '亏损'}
            <strong class="${win1 >= 0 ? 'red' : 'green'}">${Math.abs(win1)}</strong>元</em>`;
      /*如果奖金的范围上下限不一样*/
    } else {
      tpl = `您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元 <em>若中奖，奖金：
            <strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
            您将${win1 < 0 && win2 < 0 ? '亏损' : '盈利'}
            <strong class="${win1 >= 0 ? 'red' : 'green'}">${c1}</strong> 
            至 <strong class="${win2 >= 0 ? 'red' : 'green'}">${c2}</strong> 元</em>`;
    }
    /*字符串模板渲染到页面上*/
    $('.sel_info').html(tpl);
  }

  /**
   * 计算所有金额
   */
  getTotal() {
    let count = 0;
    $('.codelist li').each((index, item) => {
      count += $(item).attr('count') * 1;
    });
    $('#count').text(count);
    $('#money').text(count * 2);
  }

  /**
   * 生成随机数号码
   * @param num {number} 随机号码的个数
   * @return {string} 随机号码
   */
  getRandom(num) {
    let arr = [], index;
    /*Array.from 把伪集合转成真正的数组*/
    let number = Array.from(this.number);
    while (num--) {
      index = Number.parseInt(Math.random() * number.length);
      arr.push(number[index]);
      number.splice(index, 1);
    }
    return arr.join(' ');
  }

  /**
   * 添加随机号码
   * @param e {object} 事件对象
   */
  getRandomCode(e) {
    /*组织默认事件*/
    e.preventDefault();
    let self = this;
    /*获取当前要随机生成的数量*/
    let num = e.currentTarget.getAttribute('count');
    /*获取当前玩法*/
    let play = self.cur_play.match(/\d+/g)[0] * 1;
    if (num === '0') {  /*如果是清空购物车*/
      $(self.cart_el).html('');
    } else {  /*否则就是机选1、5、10注*/
      for (let i = 0; i < num; i++) {
        self.addCodeItem(self.getRandom(play), self.cur_play, self.play_list.get(self.cur_play).name, 1);
      }
    }
  }
}

export default Base;
