'use strict';

var path = require('path');
var gulp = require('gulp');
var gulpDocs = require('gulp-ngdocs');
var conf = require('./conf');

var options = {
    html5Mode: true,
    // startPage: '/api',
    title: 'Demo Documentation'
};

gulp.task('ngdocs', function () {
    return ngdocs();
});

function ngdocs() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(gulpDocs.process(options))
        .pipe(gulp.dest('docs'));
}