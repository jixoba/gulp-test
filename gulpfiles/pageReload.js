/**
 * @desc 此文件为页面刷新任务
 * 
 */

var gulp =require('gulp'),                                      //引入gulp模块
    connect = require('gulp-connect'),                          //引入服务器功能模块  
    pathConfig = require('./pathConfig');                       //引入路径定义文件
var INPATH = pathConfig.pageReload;
gulp.task('pageReload',function(){
    gulp.src(INPATH)
        .pipe(connect.reload());              //重启浏览器  
                                        
});