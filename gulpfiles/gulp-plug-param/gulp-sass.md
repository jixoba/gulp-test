## gulp-sass参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| {outputStyle: 'compressed'} | 压缩编译后的css文件 | `Object` |
#### example 如下：
```
…
gulp.src('./sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))          
…
```