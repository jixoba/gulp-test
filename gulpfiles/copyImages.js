/**
 * @desc 此文件是复制并压缩图片任务模块
 * @param {String} INPATH 
 * @param {String} BASE 
 * @param {String} OUTPATH 
 * @param {Number} LEVEL 
 * @param {Boolean}  PROGRESS 
 * @param {Number}  INTERLACED 
 * @param {Number}  MULTIPASS 
 */
var gulp = require('gulp'),                     //引入gulp模块
    imagemin = require('gulp-imagemin'),        //引入压缩图片模块
    pathConfig = require('./pathConfig');       //引入路径定义文件    
require('require-dir')('../gulpfiles');                      //引入gulpfiles中的任务  
var INPATH = pathConfig.copyImages.inPath,
    BASE = pathConfig.copyImages.base,
    OUTPATH = pathConfig.copyImages.outPath,
    LEVEL = 3,
    PROGRESS = false,
    INTERLACED = false, 
    MULTIPASS = false; 
gulp.task('copyImages', ['clean'], function () {
    return gulp.src(INPATH,{base: BASE})          //指定要压缩的图片
         .pipe(imagemin({
            optimizationLevel: LEVEL,                               //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: PROGRESS,                                  //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: INTERLACED,                                 //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: MULTIPASS                                    //类型：Boolean 默认：false 多次优化svg直到完全优化
         }))                                                        //进行图片压缩
         .pipe(gulp.dest(OUTPATH));                                 //输出目的地
});