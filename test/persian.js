var assert = require('assert'),
    tzu = require('../index.js');

describe('Persian Conversion', function() {
    context('• persianize', function() {
        context('valid cases', function() {
            it('should return persian number', function(done) {
                assert.deepEqual(tzu.persianize(16), '۱۶');
                assert.deepEqual(tzu.persianize(1), '۱');
                assert.deepEqual(tzu.persianize(0), '۰');
                done();
            })
        })
        context('invalid cases', function() {
            it('should return error', function(done) {
                done();
            })
        })
    })
    context('• depersianize', function() {
        context('valid cases', function() {
            it('should return modern number', function(done) {
                assert.deepEqual(tzu.depersianize('۱۶'), 16);
                assert.deepEqual(tzu.depersianize('۱'), 1);
                assert.deepEqual(tzu.depersianize('۰'), 0);
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
