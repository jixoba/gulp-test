## gulp-htmlmin参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| removeComments | 清除html注释 | `false` |
| collapseWhitespace | 压缩html | `false` |
| minifyCSS | 压缩页面CSS | `false` |
| minifyJS | 压缩页面JS | `false` |

#### example 如下:
```
…
.pipe(htmlmin({
    collapseWhitespace: true,                     
    minifyCSS: true,                                        
    minifyJS: true                                         
}))  
…
```