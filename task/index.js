'use strict'

const gulp = require('gulp')

require('./bump')
require('./doc')
require('./stamp')

gulp.task('default', ['doc'])
