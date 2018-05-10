## gulp-htmlmin参数说明
| Option                         | Description     | Type | Default |
|--------------------------------|-----------------|------|---------|
| removeComments | 清除html注释 | boolean | `false` |
| collapseWhitespace | 压缩html | boolean |`false` |
| minifyCSS | 压缩页面CSS | boolean | `false` |
| minifyJS | 压缩页面JS | boolean |`false` |

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