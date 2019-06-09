const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

sass.compiler = require('node-sass');

// const files = [
//   'src/styles/one.scss',
//   'src/styles/two.scss'
// ]

task('clean', () => {
  console.log(env);

  return src('dist/**/*', { read: false })
    .pipe(rm());
});


task(
  'copy:html', () => {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({ stream: true }));
  });

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/css/main.scss'
];

task(
  'styles', () => {
    return src(styles)
      .pipe(gulpif(env === 'dev', sourcemaps.init()))
      .pipe(concat('main.min.scss'))
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(env === 'dev',
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        })
      )
      )
      .pipe(gulpif(env === 'prod', gcmq()))
      .pipe(gulpif(env === 'prod', cleanCSS()))
      .pipe(gulpif(env === 'dev', sourcemaps.write()))
      .pipe(dest('dist'))
      .pipe(reload({ stream: true }));
  });

// ----------- Scripts -----------  

const libs = [
  'node_modules/jquery/dist/jquery.js',
  'src/js/*.js'
]

task('scripts', () => {
  return src(libs)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js', { newLine: ';' }))
    .pipe(gulpif(env === 'dev', babel({
        presets: ['@babel/env']
      }))
    )
    .pipe(gulpif(env === 'dev', uglify()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));

})

// ----------- DEV server -----------

task('server', function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });
});

task('watch', () => {
  watch('./src/css/**/*.scss', series('styles'));
  watch('./src/*.html', series('copy:html'));
  watch('./src/js/*.js', series('scripts'));
});


task('default',
  series(
    'clean',
    parallel('copy:html', 'styles', 'scripts'),
    parallel('watch', 'server')
  )
);


task('build',
  series(
    'clean', parallel('copy:html', 'styles', 'scripts'))
);