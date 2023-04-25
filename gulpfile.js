// Importação de plugins para a função de compilar sass
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps') 

// Importação de plugin para a função de comprimir imagens
const imagemin = require('gulp-imagemin')

// Importação de plugin para a função de comprimir arquivos Javascript
const uglify = require('gulp-uglify')

// Função para compilar sass
function compilarSASS() {
    return gulp.src('./source/styles/*style.scss')
       .pipe(sourcemaps.init())
           .pipe(sass({
            outputStyle: 'compressed'
           }))
           .pipe(sourcemaps.write('./maps'))
           .pipe(gulp.dest('./build/styles'))
}

// Função para comprimir imagens
function comprimirImg() {
    return gulp.src('./source/images/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./build/images'))
}

// Função para comprimir Javascript
function comprimirJS() {
    return gulp.src('./source/scripts/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./build/scripts'))
}

exports.img = comprimirImg
exports.sass = compilarSASS
exports.JS = comprimirJS