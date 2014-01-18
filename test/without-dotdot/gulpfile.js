var gulp = require('gulp')
var jshint = require('gulp-jshint')

var map = require('map-stream');
var exitOnJshintError = map(function (file, cb) {
  if (!file.jshint.success) {
    console.error('jshint failed');
    process.exit(1);
  }
});

gulp.task('lint', function() {
  gulp.src('example.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(exitOnJshintError);
});

gulp.task('default', function () {
  gulp.run('lint');
});