'use strict';

// This gulp file is mostly for compiling our Sass files using Dart Sass.
const gulp = require( 'gulp' ),
      sass = require( 'gulp-dart-sass' );

// Look in this directory for any Sass files to compile.
const cssSource = './source/assets/sass/**/*.scss';

// Include other directories not in this project's source files.
const cssIncludePaths = [
  './node_modules/reveal.js/css'
];

// Send the build files to this directory.
const cssBuild = './docs/assets/css';

gulp.task( 'sass', function() {
  return gulp.src( cssSource )
    .pipe( sass( {
      outputStyle: 'compressed',
      includePaths: cssIncludePaths
    } ) )
    .pipe( gulp.dest( cssBuild ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
