/**
 * @desc 此文件是server服务任务模块
 * @param {String} ROOTPATH
 * @param {Number} PORT
 * @param {Boolean} LIVERELOAD
 */
var gulp =require('gulp'),                      //引入gulp模块
    connect = require('gulp-connect'),          //引入connect服务器模块
    pathConfig = require('./pathConfig');       //引入路径定义文件    
var ROOTPATH_PRO = pathConfig.server.rootPathPro,
    ROOTPATH_DEV = pathConfig.server.rootPathDev,
    PORT = pathConfig.server.port,
    LIVERELOAD = true;
gulp.task('serverPro',function(){
    connect.server({
        root: ROOTPATH_PRO,                         //服务器的根目录
        port: PORT,                             //服务器的地址，没有此配置项默认也是 8080
        livereload: true                        //启用实时刷新的功能
    });
});

gulp.task('serverDev',function(){
    connect.server({
        root: ROOTPATH_DEV,                         //服务器的根目录
        port: PORT,                             //服务器的地址，没有此配置项默认也是 8080
        livereload: true                        //启用实时刷新的功能
    });
});