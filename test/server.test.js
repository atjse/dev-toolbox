'use strict'

const assert = require('chai').assert

const source = require('../src')
const server = source.server

describe('server', () => {
  describe('getHost', () => {
    it('should return the default host (127.0.0.1), when called without arguments', () => {
      const host = server.getHost()

      assert.strictEqual(host, '127.0.0.1')
    })

    it('should return the given host, when called with custom host', () => {
      const host = server.getHost('www.test.com')

      assert.strictEqual(host, 'www.test.com')
    })
  })

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
