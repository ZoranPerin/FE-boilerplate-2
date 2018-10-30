// dependencies
var gulp = require('gulp');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gcmq = require('gulp-group-css-media-queries');

// config
config = {
    resources: './resources/',
    destination: './assets/'
}

// sass
gulp.task('scss', function () {
    return gulp.src(config.resources + 'sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.destination + 'css'))
});

// js
gulp.task('js', function () {
    return gulp.src([config.resources + 'js/vendor/*.js', config.resources + 'js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.destination + 'js'));
});

// images
gulp.task('images', function () {
    return gulp.src(config.resources + 'images/**/*')
        .pipe(gulp.dest(config.destination + 'images'))
});

// fonts
gulp.task('fonts', function () {
    return gulp.src(config.resources + 'fonts/**/*')
        .pipe(gulp.dest(config.destination + 'fonts'))
});

// default
gulp.task('default', ['js', 'scss', 'images', 'fonts']);

// watch
gulp.task('watch', function () {
    gulp.watch('resources/sass/**/*.scss', ['scss']);
    gulp.watch('resources/js/**/*.js', ['js']);
    gulp.watch('resources/images/**/*', ['images']);
    gulp.watch('resources/fonts/**/*', ['fonts']);
});
