'use strict'

const gulp = require('gulp')
const path = require('path')
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs-extra')

gulp.task('doc', async () => {
  const root = path.normalize(`${__dirname}/../..`)
  const output = await jsdoc2md.render({
    files: path.normalize(`${root}/src/**/*.js`),
    // partial: path.root('/src/doc/**/*.hbs'),
    'no-gfm': true // https://github.com/jsdoc2md/jsdoc-to-markdown/issues/110
  })

  await fs.writeFile(path.normalize(`${root}/doc/API.md`), output)
})
