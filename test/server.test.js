'use strict'

const assert = require('chai').assert

const source = require('../src')
const server = source.server

describe('server', () => {
  describe('getPort', () => {
    it('should return the default port (8080), when called without arguments', async () => {
      const port = await server.getPort()

      assert.strictEqual(port, 8080)
    })

    it('should return a different port, than the default port (8080), if that port is not free', async () => {
      const tempServer = await server.startTempServer()
      const port = await server.getPort()

      assert.notStrictEqual(port, 8080)

      await tempServer.stop()
    })

    it('should return the given port, if that port is free', async () => {
      const port = await server.getPort(8090)

      assert.strictEqual(port, 8090)
    })

    it('should return a different port, than the given port, if that port is not free', async () => {
      const tempServer = await server.startTempServer(8090)

      const port = await server.getPort(8090)

      assert.notStrictEqual(port, 8090)
      await tempServer.stop()
    })
  })
})
