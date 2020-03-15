var gulp = require('gulp')
var ts = require('gulp-typescript')
var del = require('del')

function compileTS(dir, esModule) {
  var tsProject = ts.createProject('tsconfig.json', { module: esModule ? 'ES2015' : 'CommonJS' })
  return tsProject
    .src()
    .pipe(tsProject()).pipe(gulp.dest(dir))
}

function styles() {
  return gulp
    .src(['./src/components/**/*.scss'])
    .pipe(gulp.dest('es'))
    .pipe(gulp.dest('lib'))
}

function compileES() {
  return compileTS('es', true)
}

function compileCJS() {
  // return gulp.parallel(() => compileTS('lib', false), styles)
  return compileTS('lib', false)
}

function clean() {
  return del(['es', 'lib'])
}

exports.default = gulp.series(clean, gulp.parallel(compileCJS, compileES, styles))
