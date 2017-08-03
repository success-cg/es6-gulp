/*创建命令行参数*/
import yargs from 'yargs' //识别命令行的工具

const args = yargs.option('production', { //区分开发环境还是线上环境
  boolean: true,
  default: false,
  describe: 'min all scripts'
}).option('watch', { //监听文件的改变
  boolean: true,
  default: false,
  describe: 'watch all scripts'
}).option('verbose', { //命令行输出日志
  boolean: true,
  default: false,
  describe: 'log'
}).option('sourcemaps', { //映射源文件
  describe: 'force the creation of sourcemaps'
}).option('port', { //服务器端口号
  string: true,
  default: 8080,
  describe: 'server port'
}).argv //对输入的命令行以字符串作为解析

export default args;
