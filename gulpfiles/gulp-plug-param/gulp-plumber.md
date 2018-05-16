## gulp-plumber
阻止因错误引发的gulp插件退出
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| none | none | string |none |
***
#### example 如下：
```
var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('compress', function (cb) {
    gulp.src('lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
```