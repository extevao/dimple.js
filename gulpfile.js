let gulp = require('gulp');
let browserSync = require('browser-sync');


gulp.task('default', ['server'], function() {});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    });
    gulp.watch('public/**/*').on('change', browserSync.reload);
});

