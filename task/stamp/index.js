'use strict'

const gulp = require('gulp')
const shell = require('shelljs')
const path = require('path')
const pkg = require('../../package')

gulp.task('stamp', done => {
  const version = pkg.version

  shell.cd(path.normalize(`${__dirname}/../../`))
  shell.exec('git add .')
  shell.exec(`git commit -m 'Release v${version}'`)
  shell.exec(`git tag v${version}`)
  shell.exec('git push -u origin master')
  shell.exec('git push --tags')

  const error = shell.error()

  if (error) {
    console.log(error)
  }

  done()
})
