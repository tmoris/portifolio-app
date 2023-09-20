const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function style() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

exports.style = style;
