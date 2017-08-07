import 'babel-polyfill'

{
  console.log('a','\u0061'); //a a
  // 正常输出 unicode 码对应的字符串

  console.log('s','\u20BB7'); //s ₻7
  // 超出了0xFFFF ,前4个作为一个字符，最后一个7作为单独写出来，
  // 由于前4个 \u20BB 没有对应的字符，显示₻

  console.log('s','\u{20BB7}'); //𠮷
  // unicode码超出2个字节的，要用大括号包起来

}

 //字符串的 API
{
  /**
   * 从字符串到unicode码的API
   */
  let s = '𠮷';
  let a = '你';
  console.log('𠮷 length', s.length); // 2
  console.log('你 length', a.length); // 1
  // 字符串长度按字节来算

  console.log('0', s.charAt(0)); // �
  console.log('1', s.charAt(1)); // �
  // charAt 从字符串中获取单个字符
  // unicode码大于0xFFFF的字符串，获取单个字符是乱码

  console.log('2', s.charCodeAt(0)); // 55362
  console.log('3', s.charCodeAt(1)); // 57271
  // charCodeAt 从字符串取 unicode 码
  // unicode码大于0xFFFF的字符串，取 unicode 码可以取出来

  let s1 = '𠮷a';
  console.log('length', s1.length); // 3
  //es5 的老API取字符串长度

  console.log('code0', s1.codePointAt(0)); //134071
  //es6 的新API取字符串编码，返回的是10进制
  console.log('code0', s1.codePointAt(0).toString(16)); //20bb7
  //toString方法转换成16进制，完整的取出了第一个字符的 unicode 码
  console.log('code1', s1.codePointAt(1)); //57271
  //字符串unicode码大于0xFFFF，和老API charCodeAt(1) 取的一样
  console.log('code2', s1.codePointAt(2)); // 97
  //取到的是 a 的 unicode 码

}

{
  /**
   * 从unicode码到字符串的API
   */
  console.log(String.fromCharCode(0x20BB7)); //ஷ
  // es5的API，fromCharCode 是 codePointAt 的逆向 API,
  // 大于 0xFFFF 的 unicode 码返回的是乱码
  console.log(String.fromCodePoint(0x20BB7)); //𠮷
  // es6的API，fromCodePoint 是 codePointAt 的逆向 API
  // 大于 0xFFFF 的 unicode 码能返回整个字符
}

{
  /**
   * 字符串遍历的API
   */
  let str = '\u{20BB7}abc';
  for (let i=0; i<str.length; i++) {
    console.log('es5', str[i]); // � � a b c
  }
  //es5的方法，遍历字符串，unicode码大于 0xFFFF 的遍历会乱码

  for (let code of str) {
    console.log('es6', code); // 𠮷 a b c
  }
  //es6的方法，遍历字符串，可以识别 unicode 码大于0xFFFF的字符
}

{
  /**
   * for in 和 for of 的区别
   */

  //for … in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。
  let a = ['A', 'B', 'C'];
  a.name = 'Hello';

  for (let x in a) {
      console.log(x); // '0', '1', '2', 'name'
  }

  //for … of循环则完全修复了这些问题，它只循环集合本身的元素：
  for (let x of a) {
      console.log(x); // 'A', 'B', 'C'
  }
}

{
  /**
   * 字符串API：includes startsWith endsWith
   */
  let str = 'string';
  console.log('includes', str.includes('r')); // true
  //includes() 方法用于判断一个字符串是否包含在另一个字符串中，
  //根据情况返回true或false。
  console.log('start', str.startsWith('str')); // true
  //startsWith()方法用来判断当前字符串是否是以另外一个给定的
  //子字符串“开头”的，根据判断结果返回 true 或 false。
  console.log('end', str.endsWith('ing')); // true
  //endsWith()方法用来判断当前字符串是否是以另外一个给定的
  //子字符串“结尾”的，根据判断结果返回 true 或 false。
}

{
  /**
   * 字符串API：repeat
   */
  let str = 'abc';
  console.log('repeat', str.repeat(2)); // abcabc
  //repeat() 构造并返回一个新字符串，该字符串包含
  //被连接在一起的指定数量的字符串的副本。
}

{
  /**
   * 模板字符串
   */
  let name = 'list';
  let info = 'hello world';
  let m = `I am ${name}, ${info}`;
  console.log(m); //I am list, hello world
  //模板字符串，把字符串和变量结合起来
}

{
  /**
   * 字符串API：padStart padEnd
   * 接受2个参数
   * str.padStart(targetLength [, padString])
   */
  let str = '1'
  console.log(str.padStart(3,'0')); //001
  //padStart() 方法补充字符串长度(在前面)，到足够的位数
  console.log(str.padEnd(3,'0')); //100
  //padEnd() 方法补充字符串长度(在后面)，到足够的位数
}
