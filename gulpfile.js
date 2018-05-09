/**
 * @desc 此文件为gulp的入口文件，包含三个任务，dev，pro，build
 * 
 */
var gulp =require('gulp');                                  //引入gulp模块
require('require-dir')('./gulpfiles');                      //引入gulpfiles中的任务  

/**
 * @desc 此任务依赖serverDev，autoRefreshDev这两个任务，将在src/下开启一个服务，并且有修改自动刷新页面功能
 * @name "dev"
 */
gulp.task('dev',['serverDev','autoRefreshDev']);

/**
 * @desc 此任务依赖serverPro，autoRefreshPro这两个任务，将在build/下开启一个服务，并且有修改自动刷新页面功能
 * @name "pro"
 */            
gulp.task('pro',['serverPro','autoRefreshPro']);
/**
 * @desc 此任务依赖htmlMin这个任务，对项目进行打包，保存在build/下
 * @name "build"
 */            
gulp.task('build',['htmlMin']);                             