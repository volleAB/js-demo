const gulp = require("gulp");

//转义JavaScript
gulp.task("webpack", () => {
    const webpack = require("webpack-stream");
    const config = require
    gulp.src("./js/**/*.js")
        .pipe(webpack())
        .pipe(gulp.dest("../www/js"));
});

//编译less -> css
gulp.task("less", () => {
    const less = require("gupl-less");
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"));
});

gulp.task("default",["webpack","less"]);