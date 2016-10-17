'use strict'

const freePort = require('get-port')

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
  return await freePort({ port: port })
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

module.exports = {
  getHost,
  getPort,
  getUrl
}
