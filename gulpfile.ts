/**
 * Created by Moiz.Kachwala on 08-06-2016.
 */


"use strict";

const gulp = require("gulp"),
    del = require("del"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    gulpTypings = require("gulp-typings"),
    uglify = require('gulp-uglify'),
    sysBuilder = require('systemjs-builder');
;


/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Build Express server
 */
gulp.task('build:server', function () {
    var tsProject = tsc.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/server'));
});

gulp.task('build:client', function () {
    var tsProject = tsc.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/client'));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("client/app/**/*.ts")
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report());
});


/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("client/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/client"));
});

/**
 * Copy all resources that are not TypeScript files into build directory. e.g. index.html, css, images
 */
gulp.task("clientResources", () => {
    return gulp.src(["client/**/*", "!**/*.ts", "!client/typings", "!client/typings/**", "!client/*.json"])
        .pipe(gulp.dest("dist/client"));
});

/**
 * Copy bin directory for www
 */
gulp.task("serverResources", () => {
    return gulp.src(["server/src/bin/**"])
        .pipe(gulp.dest("dist/server/bin"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    gulp.src([
        'node_modules/reflect-metadata/Reflect.js.map',
        'node_modules/systemjs/dist/system-polyfills.js.map'
    ]).pipe(gulp.dest('dist/client/libs'));

    return gulp.src([
        'core-js/client/shim.min.js',
        'zone.js/dist/zone.min.js',
        'reflect-metadata/Reflect.js',
        'systemjs/dist/system.src.js'
    ], {cwd: "node_modules/**"})/* Glob required here. */
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("dist/client/libs"));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function () {

    var builder = new sysBuilder('./', 'client/systemjs.config.js');
    builder.loader.defaultJSExtensions = true;
    return builder.buildStatic('dist/client/app/main', 'dist/client/libs/app.min.js', {minify: true, sourceMaps: true})
        .then(function () {
            return;
        })
        .catch(function (err) {
            console.error('>>> [systemjs-builder] Bundling failed', err);
        });
});

// Minify JS bundle
gulp.task('minify:js', function () {
    return gulp
        .src('dist/client/libs/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/client/libs'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("css", () => {
    return gulp.src([
        'bootstrap/dist/**/**'
    ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/client/css"));
});

gulp.task("view", () => {
    return gulp.src([
        './server/src/view/**/**'
    ]).pipe(gulp.dest("dist/server/view"));
});

gulp.task("ENV", () => {
    return gulp.src([
        './server/process.env'
    ]).pipe(gulp.dest("dist/server"));
});

/**
 * Install typings for server and client.
 */
gulp.task("installTypings", function () {
    var stream = gulp.src(["./server/typings.json", "./client/typings.json"])
        .pipe(gulpTypings(null)); //will install all typingsfiles in pipeline.
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});

/**
 * Start the express server with nodemon
 */
gulp.task('start', function () {
    nodemon({
        script: 'dist/server/bin/www'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['tslint']
    })
        .on('restart', function () {
            console.log('restarted!');
        });
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
// gulp.task('watch', function () {
//     gulp.watch(["client/**/*.ts"], ['compile']).on('change', function (e) {
//         console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
//     });
//
//     gulp.watch(["client/**/*.html", "client/**/*.css"], ['clientResources']).on('change', function (e) {
//         console.log('Resource file ' + e.path + ' has been changed. Updating.');
//     });
//
//     gulp.watch(["server/src/**/*.ts"], ['compile']).on('change', function (e) {
//         console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
//     });
// });

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build", function (callback) {
    runSequence('clean', 'build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', 'ENV', 'view', callback);
});

gulp.task('default', function () {
    runSequence('build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', 'watch', 'start');
});
