/**
 * @param {number[]} nums
 * @return {number}
 */
'use strict';
var firstMissingPositive = function(nums) {
    var len = nums.length;
    if (len === 0) return 1;

    for (var i = 0; i < nums.length; i++) {
        var val = nums[i];
        var tmp;
        if (val <= 0 || val > len || val === nums[val - 1]) {
            continue;
        }

        if (i !== val - 1) {
            tmp = val;
            nums[i] = nums[val - 1];
            nums[val - 1] = val;
            i--;
        }
    }
    for (var idx = 0; idx < len; idx++) {
        if (idx !== nums[idx] - 1) {
           return idx + 1;
        }
    }

    return len + 1
};

var assert = require('assert');

var a = [0];
assert.equal(firstMissingPositive(a), 1)
a = [1];
assert.equal(firstMissingPositive(a), 2)

a = [1, 2, 0];
assert.equal(firstMissingPositive(a), 3)

a = [3,4,-1,1];
assert.equal(firstMissingPositive(a), 2)

