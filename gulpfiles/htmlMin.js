/**
 * @desc 此文件是压缩html格式文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH
 * @param {Boolean} COLLAPSEWHITESPACE
 * @param {Boolean} MINIFYCSS
 * @param {Boolean} MINIFYJS
 */
var gulp =require('gulp'),                                              //引入gulp模块
    htmlmin = require('gulp-htmlmin'),                                  //引入压缩html文件模块
    pathConfig = require('./pathConfig');                               //引入路径定义文件    
    require('require-dir')('../gulpfiles');                             //引入gulpfiles中的任务  
var INPATH = pathConfig.htmlMin.inPath,                                 //输入路径
    OUTPATH = pathConfig.htmlMin.outPath,                               //输出路径
    COLLAPSEWHITESPACE = true,                                          //去除空格压缩
    MINIFYCSS = true,                                                   //对html页面里的style样式压缩  
    MINIFYJS = true;                                                    //对html页面里的js压缩
/**
 * @desc 此任务对.html格式的文件进行压缩处理，依赖任务main
 * @name htmlMin
 */
gulp.task('htmlMin', function(){
    return gulp.src(INPATH)                                             //输入的.html文件路径
        .pipe(htmlmin({
            collapseWhitespace: COLLAPSEWHITESPACE,                     //去除空格压缩
            minifyCSS: MINIFYCSS,                                       //对html页面里的style样式压缩    
            minifyJS: MINIFYJS                                          //对html页面里的js压缩
        }))                   
        //.pipe(gulpif('*.html',rename({extname: '.php'})))        
        .pipe(gulp.dest(OUTPATH));                                      //压缩后输出路径
});