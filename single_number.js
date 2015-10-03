/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var b = 0;
  for (var i = 0; i < nums.length; i++) {
    b ^= nums[i];
  }

  return b;
};


var eq = require('assert').equal;
eq(singleNumber([1,1,2]), 2);
eq(singleNumber([1,1,2, 2, 4, 4, 5]), 5);
