/**
 * 整合模块：整合彩票业务
 */

import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

/**
 * 深度拷贝
 * @param target 拷贝的接收方
 * @param source  拷贝的来源
 */
const copyProperties = function (target, source) {
  /*Reflect 获取镜像代理的属性*/
  for (let key of Reflect.ownKeys(source)) {
    /*不拷贝构造函数，原型，name 这三个属性*/
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      /*Object.getOwnPropertyDescriptor(obj, prop) 方法返回指定对象上一个自有属性对应的属性描述符。*/
      let desc = Object.getOwnPropertyDescriptor(source, key);
      /*Object.defineProperty(obj, prop, descriptor) 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。*/
      Object.defineProperty(target, key, desc);
    }
  }
};

/**
 * 多重继承
 * @param mixins
 * @return {Mix}
 */
const mix = function (...mixins) {
  class Mix {

  }

  for (let mixin of mixins) {
    /*深拷贝自有属性*/
    copyProperties(Mix, mixin);
    /*深拷贝原型*/
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
};

/*将四个模块多重继承，形成一个新的模块*/
class Lottery extends mix(Base, Calculate, Interface, Timer) {
  /**
   * 构造函数
   * @param name 区分多个彩种的识别，
   * @param cname 彩种中文名
   * @param issue 期号
   * @param state 开奖状态
   */
  constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
    /*super关键字用于访问和调用一个对象的父对象上的函数。*/
    super();
    this.name = name;
    this.cname = cname;
    this.issue = issue;
    this.state = state;
    this.el = '';
    this.omit = new Map();
    this.open_code = new Set();
    this.open_code_list = new Set();
    this.play_list = new Map();
    this.number = new Set();
    this.issue_el = '#curr_issue';
    this.countdown_el = '#countdown';
    this.state_el = '.state_el';
    this.cart_el = '.codelist';
    this.omit_el = '';
    this.cur_play = 'r5';
    this.initPlayList();
    this.initNumber();
    this.updateState();
    this.initEvent();
  }

  /**
   * 更新开奖状态
   */
  updateState() {
    let self = this;
    /*调用接口获取状态*/
    this.getState().then(res => {
      self.issue = res.issue;
      self.end_time = res.end_time;
      self.state = res.state;
      $(self.issue_el).text(res.issue);
      self.countdown(res.end_time, (time) => {
        $(self.countdown_el).html(time);
      }, () => {
        /*500 毫秒后获取最新开奖状态，获取最新遗漏数据，获取最新开奖号码*/
        setTimeout(() => {
          self.updateState();
          self.getOmit(self.issue).then(res => {
            /*获取最新遗漏数据后的回调*/
          });
          self.getOpenCode(self.issue).then(res => {
            /*获取最新开奖号码后的回调*/
          });
        }, 500);
      });
    });
  }

  /**
   * 初始化事件
   */
  initEvent() {
    let self = this;
    /*玩法切换*/
    $('#plays').on('click', 'li', self.changePlayNav.bind(self));
    /*号码的选中*/
    $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
    /*添加号码*/
    $('#confirm_sel_code').on('click', self.addCode.bind(self));
    /*操作区，大小奇偶操作*/
    $('.dxjo').on('click', 'li', self.assistHandle.bind(self));
    /*机选号码，机选1注、5注、10注*/
    $('.qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));
  }
}


export default Lottery;

