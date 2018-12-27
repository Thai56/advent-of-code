var assert = require('assert');
var input = require('./inputDay1').split('\n');
var frequencyAdjuster = require('./day1');
var allNegatives = ['-1','-2','-3','-4','-5','-6'];

describe('FrequencyAdjuster', function() {
    it('should should return the correct frequency', function () {
        assert.equal(frequencyAdjuster(input), 454);
        assert.equal(frequencyAdjuster(allNegatives) < 0, true);
    });
});