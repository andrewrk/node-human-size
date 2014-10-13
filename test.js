var humanSize = require('./');
var assert = require('assert');

assert.strictEqual(humanSize(1000), "1000 B");
assert.strictEqual(humanSize(1024), "1 KB");
assert.strictEqual(humanSize(10 * 1024), "10 KB");
assert.strictEqual(humanSize(106168, 2), "103.68 KB");
assert.strictEqual(humanSize(10 * 1024 * 1024), "10 MB");
assert.strictEqual(humanSize(10 * 1024 * 1024 * 1024), "10 GB");
assert.strictEqual(humanSize(103 * 1024 * 1024 * 1024 + 1533333333, 2), "104.43 GB");
