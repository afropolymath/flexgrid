var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/css/flexgrid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['sass']);