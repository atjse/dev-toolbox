'use strict'

const p = require('path')

const packageDir = require('pkg-dir')

/**
 * Returns a normalized path.
 *
 * @param {string} path - The path to be normalized.
 *
 * @returns {string} The normalized path.
 */
function path (path) {
  return p.normalize(path)
}

let rootPath = null

/**
 * Returns a normalized path relative to the project's root directory.
 *
 * @param {string} path - The path to use to normalize.
 *
 * @returns {string} The normalized path relative to the project's root directory.
 */
function root (path) {
  if (rootPath === null) {
    rootPath = packageDir.sync(__dirname)
  }

  return p.normalize(`${rootPath}/${path}`)
}

module.exports = {
  path,
  root
}
