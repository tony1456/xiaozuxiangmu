const gulp = require('gulp');//gulp包
const minifyHtml = require('gulp-minify-html');//压缩html
const uglify = require('gulp-uglify');//压缩js
const minifyCss = require('gulp-minify-css');//压缩css
// const imagemin = require('gulp-imagemin');//压缩图片
// const connect = require('gulp-connect');//浏览器自动刷新


gulp.task('minifyHtml',function (){//压缩html
    return gulp.src('./*.html')
    .pipe(minifyHtml())//压缩html
    .pipe(gulp.dest('./dist'))
});

gulp.task('uglifyJs',function (){// 压缩js
    return gulp.src('./js/*.js')
    .pipe(uglify())// 压缩js
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('minifyCss',function (){//压缩css
    return gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
});