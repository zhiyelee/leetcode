/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var out = [1];

  for (var i = 1; i < nums.length; i ++) {
    out[i] = out[i - 1] * nums[i - 1];
  }

  var right = 1;
  for (var k = nums.length - 1; k >= 0; k--) {
    out[k] *= right;
    right *= nums[k];
  }

  return out;
};

var eq = require('assert').deepEqual;

eq(productExceptSelf([1, 2, 3, 4]), [24,12,8,6]);
eq(productExceptSelf([0, 2, 3, 4]), [24,0,0,0]);
