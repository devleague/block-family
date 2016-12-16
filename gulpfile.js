const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', function(){

  browserSync.init({
    server: {
      baseDir: 'public',
      index: 'index.html'
    }
  });

  gulp.watch("scss/**/.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src("scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/styles"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass']);