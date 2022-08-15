const { stream } = require('browser-sync');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// compile scss into css 

function style() {
  //   where is scss file
  return gulp.src('.sass/**/*.scss')
// path that file through sass compiler 
  .pipe(sass().on('error', sass.logError))
  // where do i save the compiled css 
  .pipe(gulp.dest('./css'))

  // stream changes to all browsers 
.pipe(browserSync.stream());
}

function watch() {
  browserSync.init( {
    server: {
      baseDir: './'
    }
  });
  gulp.watch('.sass/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;