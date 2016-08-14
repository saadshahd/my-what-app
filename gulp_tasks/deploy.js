const gulp = require('gulp');
const surge = require('gulp-surge');

const conf = require('../conf/gulp.conf');

gulp.task('deploy', deploy);

function deploy() {
  return surge({
    project: conf.paths.dist,
    domain: 'utopian-room.surge.sh'
  });
}
