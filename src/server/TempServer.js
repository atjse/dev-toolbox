'use strict'

const connect = require('connect')
const http = require('http')

class TempServer {
  /**
   * Creates a temporary server for test purposes.
   *
   * @param {string} host - The port of the temporary server.
   * @param {number} port - The port of the temporary server.
   */
  constructor (host, port) {
    this._host = host
    this._port = port
  }

  /**
   * Returns the host.
   *
   * @returns {string} The host.
   */
  get host () {
    return this._host
  }

  /**
   * Returns the port.
   *
   * @returns {number} The port.
   */
  get port () {
    return this._port
  }

  /**
   * Starts the temporary server.
   *
   * @returns {Promise<TempServer>}
   */
  async start () {
    this._server = connect()
    /* istanbul ignore next */
    this._server.use((req, res) => res.end(`Hello there at ${this._host}:${this._port}!\n`))

    return new Promise((resolve) => {
      this._http = http.createServer(this._server)
      this._http.listen(this._port).on('listening', () => resolve(this))
    })
  }

  /**
   * Stops the temporary server.
   *
   * @returns {Promise<TempServer>}
   */
  async stop () {
    return new Promise((resolve) => {
      this._http.close(() => resolve())
    })
  }
}

/**
 * The TempServer module.
 *
 * @module dev-toolbox/server/TempServer
 */
module.exports = TempServer
