import gulp from "gulp";
import browserSync from "browser-sync";
import sourceMaps from "gulp-sourcemaps";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('styles', () => {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({}, true).on('error', sass.logError))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
