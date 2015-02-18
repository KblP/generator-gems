var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = global.config.watch || {};

gulp.task('watch', ['build'], function() {
	$.express.run(config);

  gulp.watch(['./public/styles/**/*.less'], ['styles']);

  gulp.watch(['./public/js/**/*.js'], ['scripts']);

  gulp.watch(['./views/**/*.ejs'], $.express.notify);

	gulp.watch(
    ['./app.js','./routes/*.js','./models/*.js'],
    function(e) { $.express.run(config); $.express.notify(e); }
  );
});