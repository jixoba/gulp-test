/**
 * @desc 此文件对项目的html文件压缩，并对页面里引入的js与css文件进行压缩合并，重命名文件名称的任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH
 */
var gulp =require('gulp'),
    useref = require('gulp-useref'),              //引入合并js和css文件模块 
    uglify = require('gulp-uglify'),              //引入压缩js模块
    cleancss = require('gulp-clean-css'),         //引入压缩js模块
    rev = require('gulp-rev'),                    //引入文件名加md5码模块
    revReplace = require('gulp-rev-replace'),     //引入替换html中的js与css文件名模块
    gulpif = require('gulp-if'),                  //引入判断文件类型模块
    connect = require('gulp-connect'),            //引入服务器功能模块  
    rename = require('gulp-rename'),                //引入文件重命名模块
    lazypipe = require('lazypipe'),                 //引入管道处理模块
    babel = require('gulp-babel'),                  //引入es6解释模块
    base64 = require('gulp-base64'),                //引入图片转base64模块
    sourcemaps  = require('gulp-sourcemaps');       //引入sourcemaps模块    
    pathConfig = require('./pathConfig'),           //引入路径定义文件
    require('require-dir')('../gulpfiles');                      //引入gulpfiles中的任务  
var INPATH = pathConfig.main.inPath,
    OUTPATH = pathConfig.main.outPath;
gulp.task('main', ['less', 'sass', 'copyImages'] ,function () {
    return gulp.src(INPATH)
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true }))) // 合并注释里的文件 .css和.js文件
        .pipe(gulpif('*.js', babel({presets: ['es2015']})))     // 压缩js文件
        .pipe(gulpif('*.js', uglify()))       // 压缩js文件
        .pipe(gulpif('*.js', rev()))          // 合并压缩后的js文件名添加md5后缀
        .pipe(gulpif('*.css', base64({maxImageSize: 8*1024})))    // 把css中引入图片转base64为文件
        .pipe(gulpif('*.css', cleancss()))    // 压缩css文件 
        .pipe(gulpif('*.css', rev()))         // 合并压缩后的css文件名添加md5后缀
        .pipe(revReplace())                   // 添加了md5后缀的文件名替换到html中
        .pipe(sourcemaps.write('maps'))       //将生成的sourceMap文件放在maps文件夹下  
        .pipe(gulp.dest(OUTPATH))             //打包输出目录 
        .pipe(connect.reload());              //重启浏览器  
});
