var assert = require('assert'),
    tzu = require('../index.js');

describe('Verbose (word) Conversion', function() {
    context('• toWords', function() {
        context('valid cases', function() {
            it('should return converted number into words', function(done) {
                assert.deepEqual(tzu.toWords(16), 'sixteen');
                assert.deepEqual(tzu.toWords(1), 'one');
                assert.deepEqual(tzu.toWords(5), 'five');
                assert.deepEqual(tzu.toWords(5230), 'five thousand two hundred thirty');
                assert.deepEqual(tzu.toWords(123), 'one hundred twenty three');
                assert.deepEqual(tzu.toWords(10), 'ten');
                done();
            })
        })
        context('invalid cases', function() {
            it('should return error', function(done) {
                done();
            })
        })
    })
});
