'use strict';
 
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var browserify = require('browserify');
var rimraf = require('rimraf');
var hbsfy = require('hbsfy');

/****************************************
  JS
*****************************************/

var bundler = browserify({
  entries: ['./src/index.js'],
  debug: true
});

bundler.transform(hbsfy);
bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('clean', function (cb) {
  rimraf('build', cb);
});

gulp.task('build', ['clean'], function () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/scripts'));
});

/****************************************
  Sass
*****************************************/

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch(['src/**/*.js', 'src/**/*.hbs'], ['build'])
});

gulp.task('default', ['sass', 'build', 'watch'])