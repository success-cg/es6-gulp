import gulp from 'gulp';
import gulpif from 'gulp-if'; // gulp语句中作if判断的
import concat from 'gulp-concat'; // 处理文件合并的
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream'; // 文件数据流处理
import rename from 'gulp-rename' // 文件重命名的
import named from 'vinyl-named'; // 文件重命名做标志
import livereload from 'gulp-livereload'; // 热更新，自动刷新
import plumber from 'gulp-plumber'; // 处理文件信息流的
import uglify from 'gulp-uglify'; // 处理js压缩的
import {log, color} from 'gulp-util'; // 在命令行工具输出的包
import args from './util/args'; // 自己写的对命令行参数解析的包

gulp.task('scripts', () => { // gulp.task创建命令
  return gulp.src(['app/js/index.js']) // gulp.src打开文件
    .pipe(plumber({
      errorHandle: function() {}
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => { // 错误处理
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js')) // 文件输出路径
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}})) // 压缩js
    .pipe(gulp.dest('server/public/js')) // 文件输出路径
    .pipe(gulpif(args.watch, livereload())) // gulpif判断args中如果有watch属性，就执行热更新
})
