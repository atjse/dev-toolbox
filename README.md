🛠 dev-[toolbox] 🛠
===================

[![Travis CI - Build Status][travis-badge]][travis-url]
[![Dependencies][dep-badge]][dep-url]
[![Coveralls - Code Coverage Status][cov-badge]][cov-url]
[![JavaScript Style Guide][jsstd-badge]][jsstd-url]
[![PRs Welcome][pr-badge]][pr-url]

The **useful development toolbox** for Node.js packages.

Installation
------------

```bash
# Using NPM
npm install dev-toolbox --save-dev

# Using Yarn
yarn add dev-toolbox --dev
```

Usage
-----

The [**server**](src/server/index.js) module:

```javascript
const toolbox = require('dev-toolbox')
const server = toolbox.server

// ...

// get a free port
const freePort = await server.getPort()

// ...

// start a temporary server
const temp = await server.startTempServer()

console.log('temp started', temp.host, temp.port)

// stop the temporary server
await temp.stop()
```

For more check out the [**docs**](doc/API.md), [**source**](src/server), and 
[**tests**](test/server.test.js).

---

The [**files**](src/files/index.js) module:

```javascript
const toolbox = require('dev-toolbox')
const files = toolbox.files

// ...

// get the normalized path
files.path('/../src/')

// get the normalized path relative to your project's root directory
files.root('/src')
```

For more check out the [**docs**](doc/API.md), [**source**](src/files), and 
[**tests**](test/files.test.js).

Contribution
------------

**Any contribution is appreciated**. To get going, check out the 
[**contribution guidelines**](CONTRIBUTING.md), then the 
[**development manual**](DEVELOPMENT.md). 
***Thank you, have fun!***

License
-------

[MIT](LICENSE.md) @ [Richard Szakacs](https://www.github.com/richardszkcs)

 [travis-badge]: https://travis-ci.org/atjse/dev-toolbox.svg?branch=master
 [travis-url]:   https://travis-ci.org/atjse/dev-toolbox

 [dep-badge]:    https://david-dm.org/atjse/dev-toolbox/status.svg
 [dep-url]:      https://david-dm.org/atjse/dev-toolbox

 [cov-badge]:    https://coveralls.io/repos/github/atjse/dev-toolbox/badge.svg?branch=master
 [cov-url]:      https://coveralls.io/github/atjse/dev-toolbox?branch=master

 [jsstd-badge]:  https://img.shields.io/badge/code_style-standard-brightgreen.svg
 [jsstd-url]:    https://standardjs.com

 [pr-badge]:     https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
 [pr-url]:       CONTRIBUTING.md
