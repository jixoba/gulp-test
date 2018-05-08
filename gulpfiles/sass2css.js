/**
 * @desc 此文件是将sass转为css文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH  
 */
var gulp =require('gulp'),
    sass = require('gulp-sass'),
    pathConfig = require('./pathConfig'); //引入路径定义文件            
var INPATH = pathConfig.less.inPath,
    OUTPATH = pathConfig.less.outPath;
gulp.task('sass',function(){
    return gulp.src(INPATH)
    .pipe(sass())
    .pipe(gulp.dest(OUTPATH));
});
