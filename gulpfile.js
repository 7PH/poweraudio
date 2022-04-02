const gulp = require("gulp");
const ts = require("gulp-typescript");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require('vinyl-buffer');
const tsify = require("tsify");
const uglify = require('gulp-uglify');


const tsProject = ts.createProject("tsconfig.json");

/**
 * Build lib for publishing to npm
 */
gulp.task("build-lib", function() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("build"));
});

/**
 * Build dist files for direct web import
 */
gulp.task("build-dist", function() {
    return browserify({ basedir: ".", entries: ["src/lib/web.ts"], })
        .plugin(tsify, { project: "tsconfig.json" })
        .bundle()
        .pipe(source('power-audio.js')) 
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

/**
 * Build public docs
 */
gulp.task("build-docs-ts", function() {
    return browserify({ basedir: ".", entries: ["src/docs/index.ts"], })
        .plugin(tsify, { project: "tsconfig.docs.json" })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("docs"));
});
gulp.task("build-docs-assets", function() {
    return gulp.src(["src/docs/*.{html,mp3,css}", "src/docs/CNAME"]).pipe(gulp.dest('docs'));
});
gulp.task("build-docs", gulp.series('build-docs-assets', 'build-docs-ts'));

/**
 * Build all
 */
gulp.task('build', gulp.parallel('build-lib', 'build-dist', 'build-docs'));

// Default
gulp.task('default', gulp.parallel('build'));