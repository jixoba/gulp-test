## gulp-csslint
css文件检查插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| lookup | false的时候，不去读取.csslintrc这个配置文件 | boolean | true |
### 其它属性列表
* box-model        　　　　　 设置width或height的同时，还设置为border或padding，则必须设置box-sizing
* display-property-grouping 设置display属性时，不能包含其他不必要的代码，如display:inline，又设置height值
* duplicate-properties     　不允许包含重复的样式属性
* empty-rules            　　不允许包含空样式规则
* known-properties      　　　不允许使用不识别的样式属性
* adjoining-classes     　　　　　 不要使用相邻选择器，如.a.b{}
* box-sizing           　　　　　　box-sizing不要与相关属性同用
* compatible-vendor-prefixes     需要兼容第三方前缀
* gradients        　　　　　　　　 需要所有的渐变定义
* text-indent    　　　　　　　　　　不能使用负值
* vendor-prefix    　　　　　　　　 第三方前缀和标准属性一起使用
* fallback-colors    　　　　　　　 需要指定备用颜色
* star-property-hack    　　　　  不能使用'*'hack
* underscore-property-hack       不能使用'_'hack
* bulletproof-font-face          需要使用备用字体
* font-faces        　　　　  　　　不能使用超过5个web字体
* import        　　　　　　　 　　  禁止使用@import
* regex-selectors        　　　　  禁止使用属性选择器中的正则表达式选择器
* universal-selector    　　 　　  禁止使用通用选择器*
* unqualified-attributes    　　　禁止使用不规范的属性选择器
* zero-units            　　 　　　0后面不要加单位
* overqualified-elements    　　　使用相邻选择器时，不要使用不必要的选择器
* shorthand        　　　　　　　　 简写样式属性
* duplicate-background-images    相同的url在样式表中不超过一次
* floats    　　 不使用超过10次的浮动
* font-sizes    不使用超过10次的font-size
* ids        　　不使用id选择器
* important     不使用!important
* outline-none    禁用outline:none
* qualified-headings    <h1-h6>应该被设置为顶级样式，所以.box h3{}会提示警告；而h3{}则不会
* unique-headings    当多个规则定义针对同一标题的属性时，会出现警告
***
#### example 如下：
```
检查后的错误输出
gulp.task('lint', function() {
  gulp.src('lib/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
```
```
用引入的formatter样式
var csslint = require('gulp-csslint');
 
gulp.task('lint', function() {
  gulp.src('lib/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter(require('csslint-stylish')))
});
```