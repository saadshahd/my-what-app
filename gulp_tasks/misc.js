const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const rename = require('gulp-rename');
const wiredep = require('wiredep');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const deps = wiredep().packages;
  const depsKeys = Object.keys(deps);
  const fileFilter = filter(file => file.stat.isFile());

  const fontFiles = depsKeys.reduce((files, dep) => {
    const depFiles = deps[dep].main;
    const depFonts = depFiles.filter(isFontFile);

    return files.concat(depFonts);
  }, []);

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
  ].concat(fontFiles))
    .pipe(fileFilter)
    .pipe(rename(changeFontsDirname))
    .pipe(gulp.dest(conf.paths.dist));
}

function changeFontsDirname(path) {
  const ext = path.extname.replace('.', '');
  const isFont = isFontFile(ext);

  if (isFont) {
    path.dirname = '/fonts';
  }
}

function isFontFile(file) {
  return isFontExt(file.split('.').pop());
}

function isFontExt(ext) {
  const isSvg = ext === 'svg';
  const isEot = ext === 'eot';
  const isTtf = ext === 'ttf';
  const isWoff = ext === 'woff';
  const isWoff2 = ext === 'woff2';
  const isFont = isSvg || isEot || isTtf || isWoff || isWoff2;

  return isFont;
}
