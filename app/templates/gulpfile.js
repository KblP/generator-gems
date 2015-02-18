'use strict';
var gulp = require('gulp');

global.config = require('./gulp/gulp_config');

require('require-dir')('./gulp/tasks');

gulp.task('build', ['styles', 'scripts', 'vendor']);

gulp.task('default', ['build', 'watch']);