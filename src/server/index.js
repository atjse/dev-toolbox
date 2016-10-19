'use strict'

const freePort = require('get-port')

const TempServer = require('./TempServer')

const DEFAULT_HOST = '127.0.0.1'
const DEFAULT_PORT = 8080

/**
 * Returns the host.
 *
 * @param {string} [host] - The host. The default host is "127.0.0.1".
 *
 * @returns {string} The host.
 */
function getHost (host = DEFAULT_HOST) {
  return host
}

/**
 * Returns a free port.
 *
 * @param {number} [port] - The port. If no port given, the default port is 8080.
 *
 * @returns {number} The free port.
 */
async function getPort (port = DEFAULT_PORT) {
  const availablePort = await freePort({ port: port })
  return availablePort
}

/**
 * Returns the URL. The default URL is "http://127.0.0.1:8080".
 *
 * @param {string} [host] - The host. The default host is "127.0.0.1".
 * @param {number} [port] - The port. If no port given, the default port is 8080.
 *
 * @returns {string} The URL with the given port.
 */
async function getUrl (host = DEFAULT_HOST, port = DEFAULT_PORT) {
  host = getHost(host)
  port = await getPort(port)

  return `http://${host}:${port}`
}

/**
 * Starts a temporary server for testing purposes.
 *
 * @param {*} [args] - If one arguments specified, that will be the (port).
 *                     If two arguments, they will be the (host, port).
 *
 * @returns {Promise<any>}
 */
async function startTempServer (...args) {
  let host = DEFAULT_HOST
  let port = DEFAULT_PORT

  if (args.length === 1) {
    port = args[0]
  } else if (args.length > 1) {
    host = args[0]
    port = args[1]
  }

  const server = new TempServer(host, port)
  return server.start()
}

module.exports = {
  DEFAULT_HOST,
  DEFAULT_PORT,
  getHost,
  getPort,
  getUrl,
  startTempServer
}
