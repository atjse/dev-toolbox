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

/**
 * @private
 * @type {string|null}
 */
let _rootPath = null

/**
 * Returns a normalized path relative to the project's root directory.
 *
 * @param {string} [path] - The path to use to normalize.
 *                          If none given, only the project's root directory will be used.
 *
 * @returns {string} The normalized path relative to the project's root directory.
 */
function root (path = '') {
  if (_rootPath === null) {
    _rootPath = packageDir.sync(__dirname)
  }

  return p.normalize(`${_rootPath}/${path}`)
}

/**
 * Files module.
 *
 * @module dev-toolbox/files
 */
module.exports = {
  path,
  root
}
