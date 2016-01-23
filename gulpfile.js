var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    log = require('gulp-log'),
    tsc = require('gulp-tsc'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat')
;

gulp.task('default', ['jade', 'jade-html', 'ts', 'styles']);

gulp.task('styles', function () {
    gulp.src('./static/css/**/*.scss')
        .pipe(sass({ onError: function (e) { console.log(e); } }))
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(concat('styles.compiled.css'))
        .pipe(gulp.dest('static/css/'))
    ;
});

gulp.task('jade-html', function () {
    gulp.src("application/views/**/*.html")
        .pipe(rename(function (path) {
            path.extname = ".php"
        }))
        .pipe(gulp.dest("application/views/"));
});

gulp.task('jade', function () {
    gulp.src('application/views/**/*.jade')
        .pipe(log())
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        //.pipe(jade())
        .pipe(gulp.dest('application/views/'))
    ;
});

gulp.task("ts", function () {
    var appConfig = {
        "module": "amd",
        target: "es5",
        noImplicitAny: true,
        experimentalDecorators: true,
        sourceMap: true,
        out: "app.compiled.js"
    };

    return gulp.src(['static/js/**/*.ts', 'typings/tsd.d.ts'])
        .pipe(log())
        .pipe(tsc(appConfig))
        .pipe(gulp.dest("static/js/"));
});