## gulp-useref参数说明
| Option                         | Description     | Default |
|--------------------------------|-----------------|---------|
| searchPath | 相对于输入流路径输入 | `String` or `Array` |
| base | 输出的文件相对于当前gulp路径 | `String` or `Array` |
| noAssets | 跳过资源文件只处理html文件 | `Boolean` |
| noconcat | 不合并资源但是资源流正常输出 | `Boolean` |
| newLine | 合并后的资源中原文件中间有分割字符串 | `None` |
#### example 如下：
```
…
.pipe(useref({ 
        searchPath: 'sub',
        base: 'subbuild',
        noAssets: false,
        noconcat: false,
        newLine: '------'
    }))
…
```