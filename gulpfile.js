var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

var mainLessFiles = [
    'pub/static/frontend/Magento/luma/en_US/css/styles-l.less',
    'pub/static/frontend/Magento/luma/en_US/css/styles-m.less'
];

gulp.task('less', function () {
    return gulp.src(mainLessFiles)
        .pipe(sourcemaps.init())
        .pipe(less(['pub/static/frontend/Magento/luma/en_US']))
        .pipe(sourcemaps.write())
        .pipe(minifyCSS())
        .pipe(gulp.dest('pub/static/frontend/Magento/luma/en_US/css'))
});

gulp.task('watch', function() {
    gulp.watch('pub/static/frontend/Magento/luma/en_US/css/*.less', ['less']);
});

gulp.task('default', ['less']);