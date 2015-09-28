/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    var carry = 1;
    for (var i = len - 1; i >= 0; i--) {
        var val = digits[i];
        digits[i] = (val + carry) % 10;
        carry = Math.floor((val + carry) / 10);

        if (!carry) break;
    }

    if (carry) digits.unshift(carry);
    return digits;
};


var eq = require('assert').deepEqual;

eq(plusOne([0]), [1]);
eq(plusOne([1,0, 9]), [1, 1, 0]);
eq(plusOne([9]), [1, 0]);
