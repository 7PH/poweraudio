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

// build bundle .js
gulp.task('build-bundle', gulp.series('bundle-browserify'));

// rebuild demo

gulp.task('default', gulp.series('build-bundle'));
