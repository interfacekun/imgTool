const imagemin = require("gulp-imagemin");
const gulp = require('gulp');
const pngquant = require('imagemin-pngquant');
const gutil = require('gulp-util');

gulp.task("imgMin", function (cb) {
    gulp.src(["./img/**/*.{jpg,png}"])
    .pipe(imagemin({
        optimizationLevel: 3,
        plugins: [
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            pngquant({floyd: 1})
        ]
    }))
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest("./imgMin/"))
    .on("end", cb);
});