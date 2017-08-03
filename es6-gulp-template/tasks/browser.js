import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; // gulp常用工具，函数集合
import args from './util/args';

gulp.task('browser', (cb) => {
  if (!args.watch) {
    return cb()
  } // 如果没有处于监听状态下，就执行并返回回调函数
  gulp.watch('app/**/*.js', ['scripts'])
  gulp.watch('app/**/*.ejs', ['pages'])
  gulp.watch('app/**/*.css', ['css']) /**
   * 监听app目录下的所有js、ejs、css文件，发生改变了就执行scripts任务
   */
})
