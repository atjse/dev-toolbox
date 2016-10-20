Development Manual
==================

**DISCUSS, CLONE, DEVELOP, COMMIT, PROFIT**

Tools
-----

 - Tasks: [**Gulp**][1]
 - Tests: [**Mocha**][2]
 - Style: [**StandardJS**][3]
 - Catalyst: [**Coffee**][4]

Structure
---------

 - **doc**: generated API documentation based on the JSDoc in the sources
 - **src**: project's sources compartmentalized as modules.
 - **task**: organized Gulp tasks
 - **test**: several, per-module tests

Main NPM commands
----------------- 

```bash
# Checks coding style
npm run check

# Runs all tests with coverage checks
npm run test

# Generates the documentation in doc/API.md
npm run doc

# Prepares (check-and-test) the project before committing 
npm run prepare
```

HAVE FUN!
---------

 [1]: https://gulpjs.com/
 [2]: https://mochajs.org/
 [3]: https://standardjs.com/
 [4]: https://twitter.com/richardszkcs/status/1006990821709766658
