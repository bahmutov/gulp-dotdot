var gulp = require('gulp')
var jshint = require('gulp-jshint')

gulp.task('lint', function() {
  gulp.src('example.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function () {
  gulp.run('lint');
});