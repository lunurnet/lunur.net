var gulp = require('gulp');

// postcss and plugins
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');

// minify
var jsmin = require('gulp-minify');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');

// dev server
var browserSync = require('browser-sync').create();

// minify js
gulp.task('build:js', function() {
  gulp.src('./src/scripts.js')
    .pipe(jsmin())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// compile and minify css
gulp.task('build:css', function () {
  var processors = [
    tailwindcss,
    autoprefixer
  ];
  return gulp.src('./src/styles.css')
    .pipe(postcss(processors))
    .pipe(csso())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// minify html
gulp.task('build:html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// copy images
gulp.task('build:assets', function() {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
});

// build
gulp.task('build', gulp.parallel('build:js', 'build:css', 'build:html', 'build:assets'));

// development server
gulp.task('serve', function() {
  // build assets
  gulp.series('build')();

  // initialize developement server
  browserSync.init({
    server: './dist'
  });

  // watch for changes
  gulp.watch('./src/scripts.js', gulp.series('build:js'));
  gulp.watch('./src/assets/**/*', gulp.series('build:assets'));
  gulp.watch('./src/index.html', gulp.series('build:html'));
  gulp.watch(['./src/styles.css', './tailwind.config.js'], gulp.series('build:css'));
});

// default task (serve)
gulp.task('default', gulp.series('serve'));
