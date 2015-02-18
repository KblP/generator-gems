var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var config = global.config.vendor;

gulp.task('vendor', function() {
  return gulp.src(mainBowerFiles())
    .pipe($.changed(config.dest))
    .pipe($.rename(config.rename))
    .pipe(gulp.dest(config.dest));
});