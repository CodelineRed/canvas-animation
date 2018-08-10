var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

var sourcePath  = "src/";
var publicPath  = "public/";
var localServer = 'http://localhost/imhh-ca/public/';

// processing scss to css and minify result
gulp.task('scss', function() {
    gulp.src(sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(systemPath + 'css/'))
        .pipe(gulp.dest(publicPath + 'css/'));
});

// concatinate and uglify all js
gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jquery-ui-dist/jquery-ui.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            sourcePath + 'js/lib/**/*.js',
            'node_modules/jquery-canvas-animation/dist/js/jquery.canvas-animation.bundle.js',
            sourcePath + 'js/plugin/**/*.js',
            sourcePath + 'js/module/**/*.js',
            sourcePath + 'js/scripts.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(publicPath + 'js/'));
});

// copy all fonts
gulp.task('font', function() {
    gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            sourcePath + 'font/**'
        ])
        .pipe(gulp.dest(publicPath + 'font/'));
});

// add the watcher
gulp.task('watch', function() {
    // watch scss files
    gulp.watch(sourcePath + 'scss/**', ['scss']);
    // watch js files
    gulp.watch(sourcePath + 'js/**', ['js']);
    // watch fonts
    gulp.watch(sourcePath + 'font/**', ['font']);
});

// production
gulp.task('prod', ['scss', 'js', 'font']);

// default task if just called gulp (incl. Watch)
gulp.task('default', ['scss', 'js', 'font', 'watch'], function() {
    // start browsersync
    browserSync.init({
        proxy: localServer
    });

    gulp.watch(publicPath + '**/*.{css,js,jpg,png,svg,ico}').on('change', browserSync.reload);
    gulp.watch('templates/**/*.{php,html,phtml}').on('change', browserSync.reload);
//    gulp.watch(systemPath + '**/*.{php,html,phtml}').on('change', browserSync.reload);
});