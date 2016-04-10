# node-human-size

Tiny module to get a human readable file size from a byte count.

## Usage

```js
var humanSize = require('human-size');

console.log(humanSize(10 * 1024 * 1024));
// prints "10MB"

console.log(humanSize(10 * 1024 * 1024, 2));
// prints "10.00MB"

console.log(humanSize(10 * 1024 * 1024, 2, true));
// prints "10.00 MB"

console.log(humanSize(106168));
// prints "103KB"

console.log(humanSize(106168, 2));
// prints "103.68KB"

console.log(humanSize(106168, 2, true));
// prints "103.68 KB"
```
