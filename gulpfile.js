// requirements

var gulp = require('gulp');
var gulpBrowser = require("gulp-browser");
var reactify = require('reactify');
var del = require('del');
var size = require('gulp-size');


// tasks

gulp.task('transform', done => {
  var stream = gulp.src('./project/static/scripts/jsx/*.js')
    .pipe(gulpBrowser.browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(size());
  return stream;
});


gulp.task('del', function () {
  // add task
});

gulp.task('default', done => {

  gulp.series(transform);

  done();

});

// gulp.task('default', gulp.series (transform,

//     function (done) { done(); }    
// ));