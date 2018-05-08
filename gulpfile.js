/**
 * @desc 此文件为gulp的入口文件
 * 
 */
var gulp =require('gulp');                                  //引入gulp模块
require('require-dir')('./gulpfiles');                      //引入gulpfiles中的任务  

gulp.task('dev',['serverDev','autoRefreshDev']);                                //server任务开启服务
gulp.task('pro',['serverPro','autoRefreshPro','htmlMin']);                                //server任务开启服务
gulp.task('build',['htmlMin']);           //build任务进行项目打包