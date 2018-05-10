## gulp-less参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| paths | 引入的less文件路径 | `Array` |
| plugins | less的插件 | `Array` |
#### example 如下：
```
…
.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
…
```