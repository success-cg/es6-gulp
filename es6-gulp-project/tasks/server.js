import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动服务器
import args from './util/args';

gulp.task('serve', (cb) => {
  if (!args.watch) {
    return cb()
  } // 如果没有处于监听状态下，就执行并返回回调函数

  var server = liveserver.new(['--harmony', 'server/bin/www'])
  // --harmony表示在当前命令行下执行后面的js

  server.start() // 启动服务器

  gulp.watch(['server/public/**/*.js', 'server/view/**/*.ejs'], function(file) {
    server.notify.apply(server, [file]) // 通知服务器文件发生了改变，要做相应的处理
  })

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
    server.start.bind(server)() // 监听到服务端js变化，重启服务器
  })
})
