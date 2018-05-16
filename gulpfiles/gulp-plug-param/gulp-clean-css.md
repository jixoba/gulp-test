## gulp-clean-css
对css文件进行压缩处理
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| None | None | None | None |
平时使用不需要传入参数，如有需要请参阅[clean-css](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api)
***
#### example 如下：
```
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
```