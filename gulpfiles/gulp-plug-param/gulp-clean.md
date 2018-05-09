## gulp-clean参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| force | 设为true时，可以删除当前gulp工作目录以外的文件 | `false` |
---
 example 如下：
```
    gulp.task('default', function () {
        return gulp.src('app/tmp/index.js')
            .pipe(clean({
                force: true
                }))      
            .pipe(gulp.dest('dist'));
    });
```