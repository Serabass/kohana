var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    log = require('gulp-log'),
    autoprefixer = require('gulp-autoprefixer')
;

gulp.task('styles', function () {
    gulp.src('/static/css')
        .pipe(sass({ onError: function (e) { console.log(e); } }))
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(gulp.dest('.'))
    ;
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

gulp.task("ts:app", function () {
    var appConfig = {
        "module": "umd",
        target: "es5",
        noImplicitAny: true,
        experimentalDecorators: true,
        sourceMap: true,
        out: "app.compiled.js"
    };

    return gulp.src(['/static/js/**/*.ts', 'typings/tsd.d.ts'])
        .pipe(plugins.tsc(appConfig))
        .pipe(gulp.dest("public/app/"));
});