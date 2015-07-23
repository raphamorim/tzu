var assert = require('assert'),
    tzu = require('../index.js');

describe('Roman Conversion', function() {
    context('• romanize', function() {
        context('valid cases', function() {
            it('should return roman number', function(done) {
                assert.deepEqual(tzu.romanize(16), 'XVI');
                assert.deepEqual(tzu.romanize(1), 'I');
                assert.deepEqual(tzu.romanize(5), 'V');
                assert.deepEqual(tzu.romanize(5230), 'MMMMMCCXXX');
                assert.deepEqual(tzu.romanize(123), 'CXXIII');
                assert.deepEqual(tzu.romanize(10), 'X');
                done();
            })
        })
        context('invalid cases', function() {
            it('should return error', function(done) {
                done();
            })
        })
    })
    context('• deromanize', function() {
        context('valid cases', function() {
            it('should return modern number', function(done) {
                assert.deepEqual(tzu.deromanize('XVI'), 16);
                assert.deepEqual(tzu.deromanize('I'), 1);
                assert.deepEqual(tzu.deromanize('V'), 5);
                assert.deepEqual(tzu.deromanize('MMMMMCCXXX'), 5230);
                assert.deepEqual(tzu.deromanize('CXXIII'), 123);
                assert.deepEqual(tzu.deromanize('X'), 10);
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
