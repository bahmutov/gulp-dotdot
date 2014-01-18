var gulp = require('gulp')
var jshint = require('gulp-jshint')
var dotdot = require('./dotdot-replace');

gulp.task('lint', function() {
  gulp.src('*.js')
    .pipe(dotdot())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function () {
  gulp.run('lint');
});