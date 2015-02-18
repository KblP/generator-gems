var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = global.config.styles;

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.less({
      plugins: [autoprefix, cleancss]
    }))
    .pipe($.rename(config.rename))
    .pipe(gulp.dest(config.dest))
    .pipe($.express.notify());
})