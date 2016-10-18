'use strict'

const p = require('path')
const assert = require('chai').assert

const source = require('../src')
const files = source.files

describe('files', () => {
  describe('path', () => {
    it('should return the normalized path of the given path', () => {
      assert.strictEqual(files.path('a//../a'), 'a')
    })
  })

  describe('root', () => {
    it('should return the root directory of the project, when called without arguments', () => {
      const root = files.root()
      const dir = p.basename(root)

      assert.strictEqual(dir, 'dev-toolbox')
    })

    it('should return the path relative to the root directory of the project, when passed a path', () => {
      const path = files.root('/src')
      const parts = path.split(p.sep)
      const dir = parts.slice(parts.length - 2).join('/')

      assert.strictEqual(dir, 'dev-toolbox/src')
    })
  })
})
