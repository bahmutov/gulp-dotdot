var path = require('path');

gt.module('gulp-dotdot', {
  teardown: process.chdir.bind(process, __dirname)
});

gt.async('.. -> gulp-dotdot is ok for jshint', function () {
  process.chdir(path.join(__dirname, 'with-dotdot'));
  gt.exec('gulp', ['lint'], 0, 'gulp-jshint breaks on .. notation');
});

gt.async('.. notation breaks jshint', function () {
  process.chdir(path.join(__dirname, 'without-dotdot'));
  gt.exec('gulp', [], 1, 'gulp-jshint breaks on .. notation');
});