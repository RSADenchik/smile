module.exports = function () {
    $.gulp.task('scripts:lib',function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'src/js/partials/materialize.min.js'
        ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
    $.gulp.task('compress:lib',function () {
        return $.gulp.src(['build/js/libs.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('build/js/compressed'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
    $.gulp.task('scripts',function () {
        return $.gulp.src('src/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};