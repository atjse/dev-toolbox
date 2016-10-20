'use strict'

const gulp = require('gulp')

require('./bump')
require('./doc')

gulp.task('default', ['doc'])
