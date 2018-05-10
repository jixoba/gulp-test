## gulp-less参数说明
| Option                         | Description     | Type | Default |
|--------------------------------|-----------------|------|---------|
| paths | 引入的less文件路径 | array | [] |
| plugins | less的插件 | array | [] |
#### example 如下：
```
…
.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
…
```