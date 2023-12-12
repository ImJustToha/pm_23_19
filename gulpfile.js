//const gulp = require('gulp')
const { series, task, src, dest, watch } = require('gulp');  // Here, you're importing the series and task functions from the 'gulp' package. These functions are used to define and run Gulp tasks.
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const jsonminify = require('gulp-jsonminify');
//const concatJson = require('gulp-concat-json');

//додаткові плагіни Gulp
 cssnano = require ("gulp-cssnano"), //мінімізація CSS
 autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в
 concat = require ("gulp-concat"), //об'єднання файлів - конкатенація
 rename = require ("gulp-rename"); //перейменування файлів
 
// Створення задачі для підключення файлів (включаючи CSS, Sass та JS)
task('html', function () {
    // Виберіть всі файли HTML, CSS, Sass та JS з каталогу app
     return src(['./app/*.html', /*'./app/blocks/*.html', './app/css/*.css', './app/sass/*.sass', './app/js/*.js']*/])
        .pipe(fileinclude({  // Використовуємо gulp-file-include для HTML файлів
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist')) // Каталог для збереження оброблених файлів
});

task('css', function () {
    return src(['./app/css/*.css'])
    .pipe(cssnano())
    .pipe(concat('all.css')) // Об'єднати всі CSS файли в один файл
    .pipe(dest('./dist/css')) // Каталог для збереження оброблених файлів
    .pipe(browserSync.stream());
})
task('js', function () {
    return src(['./app/js/*.js'])
    .pipe (uglify ()) //стиснення коду
    .pipe(concat('all.js')) // Об'єднати всі js файли в один файл
    .pipe(dest('./dist/js/')) // Каталог для збереження оброблених файлів
    .pipe(browserSync.stream());
})

task('chart-js', function () {
    return src(['./node_modules/chart.js/dist/chart.umd.js'])
    .pipe(concat('chart.js')) // Об'єднати всі js файли в один файл
    .pipe(dest('./dist/js/')) // Каталог для збереження оброблених файлів
    .pipe(browserSync.stream());
})

task('json', function () {
    return src('./app/json/*.json')
      .pipe(jsonminify())
      //.pipe(concatJson('data.json'))
      .pipe(dest('./dist/json/'));
  });

task('sass', function () {
    return src(['./app/scss/*.scss'])
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    
    //.pipe (sass ())
    // .pipe (autoprefixer ({
    //                  browsers: [ 'last 2 versions'],
    //                  cascade: false}))
    // .pipe(sass().on('error', sass.logError)) // Компілювати Sass в CSS
    .pipe(dest('./dist/css/')) // Каталог для збереження оброблених файлів
    .pipe(browserSync.stream());
})

task ( 'imgs', function () {
    return src ( "app/img/*.+(jpg|jpeg|png|gif)")
    .pipe (imagemin ({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    interlaced: true
    }))
    .pipe (dest ( "dist/images"));
})
// Task to serve the project and watch for changes
task('serve', function () {
    browserSync.init({
        server: {
            baseDir: ['./dist/']// Serve files from the 'dist' directory
        }
    });

    // Watch HTML files for changes and reload the browser

    //watch(['./app/*.html', './app/blocks/*.html', './app/css/*.css', './app/js/*.js', './app/scss/*.scss', './app/img/*.img'], series('html', 'css', 'js', 'sass','imgs' )).on('change', browserSync.reload);
    watch(['./app/*.html', './app/blocks/*.html'], series('html')).on('change', browserSync.reload);
    watch('./app/css/*.css', series('css')).on('change', browserSync.reload);
    watch('./app/js/*.js', series('js')).on('change', browserSync.reload);
    watch('./app/scss/*.scss', series('sass')).on('change', browserSync.reload);
    watch('./app/img', series('imgs')).on('change', browserSync.reload);
    watch('./app/json', series('json')).on('change', browserSync.reload);
});

// Default task:
task('default', series('html', 'css', 'js', 'chart-js', 'sass', 'imgs','json','serve'));