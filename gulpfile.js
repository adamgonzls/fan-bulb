'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');

/****************************************
  JS
*****************************************/

var bundler = browserify({
  entries: ['./src/index.js'],
  debug: true
});

bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('clean', function (cb) {
  rimraf('build', cb);
});

gulp.task('build', ['clean'], function () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});

/****************************************
  Sass
*****************************************/

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])