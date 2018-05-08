/**
 * @desc 此文件是清除build文件夹任务模块
 * @param {String} DELPATH
 * @param {String} DELPATHSCRIPT
 * @param {String} DELPATHCSS
 */
var gulp =require('gulp'),              //引入gulp模块
    clean = require('gulp-clean'),      //引入清除模块   
    pathConfig = require('./pathConfig'); //引入路径定义文件
var DELPATH = pathConfig.clean.delPath,
    DELPATHSCRIPT = pathConfig.clean.delPathScript,
    DELPATHCSS = pathConfig.clean.delPathCss; 
gulp.task('clean', function () {
    return gulp.src(DELPATH)
        .pipe(clean());                 //清除build文件夹
});

gulp.task('cleanScript', function () {
    return gulp.src(DELPATHSCRIPT)
        .pipe(clean());                 //清除build下script文件夹
});

gulp.task('cleanCss', function () {
    return gulp.src(DELPATHCSS)
        .pipe(clean());                 //清除build下css文件夹
});