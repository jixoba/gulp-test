/**
 * @desc 此文件是监控文件变化刷新页面任务模块
 * @param {Array} WATCHPATH 
 */
var gulp =require('gulp'),                                      //引入gulp模块
    connect = require('gulp-connect'),                          //引入服务器功能模块  
    pathConfig = require('./pathConfig');                       //引入路径定义文件
    require('require-dir')('../gulpfiles');                     //引入gulpfiles中的任务  
var WATCHPATH = pathConfig.autoRefresh;
gulp.task('autoRefreshPro',function(){
    gulp.watch(WATCHPATH, ['build']);                           //当src下的文件变化时执行build任务
});
gulp.task('autoRefreshDev',function(){
    gulp.watch(WATCHPATH, ['pageReload'])                                
});