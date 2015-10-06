/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce(function (pre, curr) {
    return pre ^ curr;
  }, 0)
};


var eq = require('assert').equal;
eq(singleNumber([1,1,2]), 2);
eq(singleNumber([1,1,2, 2, 4, 4, 5]), 5);
