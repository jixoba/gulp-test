## gulp-autoprefixer参数说明
| Option                         | Description     | Type | Default |
|--------------------------------|-----------------|------|---------|
| cascade | 如果不压缩CSS，会使用视觉级联。 | boolean | true |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

#### example 如下：
```
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```