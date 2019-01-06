const assert = require('assert');
const totalPoints = require('./calculateTotalPoints');

describe('totalPoints', () => {
    describe('Points', () => {
        it ('should return', () => {
            const actual = totalPoints(227.5, 'mamute', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
            
            const expected = 208.3;

            assert.equal(actual, expected);
        });
    });
});
