/**
 * @desc 此文件是将less转为css文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH 
 */
var gulp =require('gulp'),
    less = require('gulp-less'),
    pathConfig = require('./pathConfig'); //引入路径定义文件        
var INPATH = pathConfig.less.inPath,
    OUTPATH = pathConfig.less.outPath;
gulp.task('less',function(){
    return gulp.src(INPATH)
    .pipe(less())
    .pipe(gulp.dest(OUTPATH));
});
