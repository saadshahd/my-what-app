const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

const conf = require('../conf/gulp.conf');

gulp.task('deploy', deploy);

function deploy() {
  return gulp.src(conf.paths.dist)
    .pipe(ghPages());
}
