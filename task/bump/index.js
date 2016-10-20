'use strict'

const gulp = require('gulp')
const chalk = require('chalk')
const semver = require('semver')
const fs = require('fs-extra')
const path = require('path')
const pkg = require('../../package')

async function bump (type = 'patch') {
  switch (type) {
    case 'major':
    case 'minor':
    case 'patch':
      break

    default:
      type = 'patch'
      break
  }

  const oldVersion = pkg.version
  const newVersion = semver.inc(oldVersion, type)

  console.log(`
  Bumped from ${chalk.blue.bold(oldVersion)} to ${chalk.magenta.bold(newVersion)}
  `)

  pkg.version = newVersion
  await fs.writeFile(path.normalize(`${__dirname}/../../package.json`), JSON.stringify(pkg, null, 2))
}

gulp.task('bump.major', async () => await bump('major'))
gulp.task('bump.minor', async () => await bump('minor'))
gulp.task('bump.patch', async () => await bump('patch'))
