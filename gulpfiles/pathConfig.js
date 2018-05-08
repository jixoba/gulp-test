/**
 * @desc 此文件为gulp的路径文件
 * @property {Object} main任务路径 
 * @property {Object} server任务路径
 * @property {Array} autoRefresh任务路径 
 * @property {Object} clean任务路径
 * @property {Object} copyImages任务路径
 * @property {Object} htmlMin任务路径  
 * @property {Object} less任务路径 
 * @property {Object} sass任务路径
 * @property {Array} pageReload任务路径
 */
const pathObj = {
    main: {                             // main任务路径
        inPath: './src/*.html',         //输入流     
        outPath: 'build/themes/simplicity'                //输出流
    },   
    server: {                           //
        rootPathDev: './src',
        rootPathPro: './build/themes/simplicity',
        port: 8080
    },
    autoRefresh: ['src/*.html','src/**/**/*'], // autoRefresh任务路径
    clean: {
        delPath: 'build',
        delPathScript: ['build/scripts', 'build/maps'],
        delPathCss: 'build/css'
    },
    copyImages: {
        inPath: 'src/**/*.{jpg,png,gif}',       //输入流 
        base: 'src',
        outPath: 'build/themes/simplicity'                        //输出流
    },
    htmlMin: {
        inPath: 'build/themes/simplicity/*.html',                 //输入流     
        outPath: 'build/themes/simplicity'                        //输出流
    },
    less: {
        inPath: 'src/css/less/*.less',          //输入流     
        outPath: 'src/css'                      //输出流
    },
    sass: {
        inPath: 'src/css/sass/*.scss',          //输入流     
        outPath: 'src/css'                      //输出流
    },
    pageReload: ['src/*.html'],
}
module.exports = pathObj;