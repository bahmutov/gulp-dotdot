var join = require('path').join;
var gulp = join(__dirname, '../node_modules/gulp/bin/gulp.js');

gt.module('gulp-dotdot', {
  teardown: process.chdir.bind(process, __dirname)
});

gt.async('foo..bar -> gulp-dotdot -> gulp-jshint', function () {
  process.chdir(join(__dirname, 'with-dotdot'));
  gt.exec('node', [gulp], 0, 'gulp-jshint breaks on .. notation');
});

gt.async('foo..bar -> jshint', function () {
  process.chdir(join(__dirname, 'without-dotdot'));
  gt.exec('node', [gulp], 1, 'gulp-jshint breaks on .. notation');
});