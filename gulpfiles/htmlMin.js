/**
 * @desc 此文件是压缩html格式文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH
 */
var gulp =require('gulp'),
    minifyHtml = require("gulp-minify-html"),     //引入压缩html文件模块
    pathConfig = require('./pathConfig'); //引入路径定义文件    
require('require-dir')('../gulpfiles');                      //引入gulpfiles中的任务  
var INPATH = pathConfig.htmlMin.inPath,
    OUTPATH = pathConfig.htmlMin.outPath;
gulp.task('htmlMin', ['main'], function(){
    return gulp.src(INPATH)
        .pipe(minifyHtml({comments:true,spare:true}))                   // 对html文件进行压缩  
        //.pipe(gulpif('*.html',rename({extname: '.php'})))        
        .pipe(gulp.dest(OUTPATH));
});