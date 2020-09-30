#greeklish 

A tool to convert [Greeklish](https://en.wikipedia.org/wiki/Greeklish) to Greek and vice versa with small size and zero dependencies.

Greeklish, a combination of the words Greek and English is the Greek language written using the Latin alphabet.

It is commonly use in texting to write faster and write grammar errors among Greeks.
##Usage:
```js
const gl = require('greeklish')
```

## Functions
- toGreeklish()
- toGreek()

## Examples
```js
const gl = require('greeklish')

const greekText = gl.toGreeklish('Βελτιωμένος σήμερα ο καιρός.')
// Beltiwmenos shmera o kairos.

const greekText = gl.toGreek('Βeltiwmenos shmera o kairos.')
// Βελτιωμενος σημερα ο καιρος.
```

## Validation
Both functions expect a string with atleast length of 1. Make sure you pass a valid string, otherwise the functions will throw an error.
```js
const gl = require('greeklish')

const greekText = gl.toGreeklish(1)
// Error: Value must be a string with at least one character.

const greekText = gl.toGreek('')
// Error: Value must be a string with at least one character.
```

## Tests
Clone the repo, `npm install`, and run `npm test`
