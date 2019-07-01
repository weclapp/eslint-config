const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

// Extend env rule
conf.env.node = true;

// Run linter on repo files
const report = new eslint.CLIEngine(conf).executeOnFiles([
    'src/rules.js',
    'test/test.js'
]);

// Assert no errors and warnings were found.
assert.strictEqual(report.errorCount, 0);
assert.strictEqual(report.warningCount, 0);