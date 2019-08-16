const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*', function watch() {
    return gulp.src('app/scss/**/*')
    .pipe(sass({ outputStyle: 'expanded'})
      .on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
  })
})
