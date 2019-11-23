/**
 * @license MIT
 */

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const fs = require('fs-extra');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const webpack = require('gulp-webpack');

const buildDir = process.env.BUILD_DIR || 'build';
const outDir = "dist";

/**
 * Bundle JavaScript files produced by the `tsc` task, into a single file named `xterm.js` with
 * Browserify.
 */
gulp.task('bundle-browserify', function() {

    // Ensure that the build directory exists
    fs.ensureDirSync(buildDir);

    let browserifyOptions = {
        basedir: buildDir,
        debug: true,
        entries: [`src/index.js`],
        standalone: 'PowerAudio',
        cache: {},
        packageCache: {}
    };

    return browserify(browserifyOptions)
        .bundle()
        .pipe(source('power-audio.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true, sourceRoot: '..'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outDir));

    // Copy stylesheets from ${outDir}/ to ${buildDir}/
    // let copyStylesheets = gulp.src(`${outDir}/**/*.css`).pipe(gulp.dest(buildDir));
    //return merge(bundleStream, copyStylesheets);
});

gulp.task('demo-webpack', function() {
    return gulp
        .src('build/demo/client.js')
        .pipe(webpack({ output: { filename: 'client.js' } }))
        .pipe(gulp.dest('docs'));
});

gulp.task('demo-copy', function() {
    return gulp
        .src('demo/**/*.{js,html,mp3,css}')
        .pipe(gulp.dest('docs/'));
});

// build bundle .js
gulp.task('build-bundle', gulp.series('bundle-browserify'));

// rebuild demo
gulp.task('build-docs', gulp.parallel('demo-webpack', 'demo-copy'));

gulp.task('default', gulp.parallel('build-bundle', 'build-docs'));
