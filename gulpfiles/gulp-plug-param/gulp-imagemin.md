## gulp-imagemin参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| gifsicle({interlaced: true}) | 设为true时，优化gif格式图片 | `false` |
| jpegtran({progressive: true}) | 设为true时，优化jpeg格式图片 | `false` |
| optipng({optimizationLevel: 5}) | 优化png图片，optimizationLevel的值取0-7，值越大优化越高 | `false` |

#### example如下
```
…
.pipe(imagemin([
	imagemin.gifsicle({interlaced: true}),
	imagemin.jpegtran({progressive: true}),
	imagemin.optipng({optimizationLevel: 5})
]))
…
```