var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('browser-sync', function(){

});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['browser-sync', 'watch', 'sass']);