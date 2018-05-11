## gulp-autoprefixer参数说明
| Option                         | Description     | Type | Default |
|--------------------------------|-----------------|------|---------|
| cascade | 如果不压缩CSS，会使用视觉级联。 | boolean | true |
| add | 添加前缀 | boolean | true |
| remove | 删除过时的前缀 | boolean | true |
| flexbox | flexbox属性添加前缀 | boolean | true |
| grid | ie添加栅格化属性兼容 | boolean | false |
| browsers | 支持的浏览器列表 | array | false |
#### browsers list
* `> 5%`: versions selected by global usage statistics.
  `>=`, `<` and `<=` work too.
* `> 5% in US`: uses USA usage statistics. It accepts [two-letter country code].
* `> 5% in alt-AS`: uses Asia region usage statistics. List of all region codes
  can be found at [`caniuse-lite/data/regions`].
* `> 5% in my stats`: uses [custom usage data].
* `cover 99.5%`: most popular browsers that provide coverage.
* `cover 99.5% in US`: same as above, with [two-letter country code].
* `cover 99.5% in my stats`: uses [custom usage data].
* `extends browserslist-config-mycompany`: take queries from
  `browserslist-config-mycompany` npm package.
* `ie 6-8`: selects an inclusive range of versions.
* `Firefox > 20`: versions of Firefox newer than 20.
  `>=`, `<` and `<=` work too.
* `iOS 7`: the iOS browser version 7 directly.
* `Firefox ESR`: the latest [Firefox ESR] version.
* `unreleased versions` or `unreleased Chrome versions`:
  alpha and beta versions.
* `last 2 major versions` or `last 2 iOS major versions`:
  all minor/patch releases of last 2 major versions.
* `since 2015` or `last 2 years`: all versions released since year 2015
  (also `since 2015-03` and `since 2015-03-10`).
* `dead`: browsers from `last 2 version` query, but with less than 0.5%
  in global usage statistics and without official support or updates
  for 24 months. Right now it is `IE 10`, `IE_Mob 10`, `BlackBerry 10`,
  `BlackBerry 7`, and `OperaMobile 12.1`.
* `last 2 versions`: the last 2 versions for *each* browser.
* `last 2 Chrome versions`: the last 2 versions of Chrome browser.
* `defaults`: Browserslist’s default browsers
  (`> 0.5%, last 2 versions, Firefox ESR, not dead`).
* `not ie <= 8`: exclude browsers selected by previous queries.
#### example 如下：
```
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                '> 5%',
                'ie 6-8'
                ],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```