var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = global.config.scripts;

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.jsvalidate())
    .pipe($.uglify())
    .pipe($.rename(config.rename))
    .pipe(gulp.dest(config.dest))
    .pipe($.express.notify());
});
