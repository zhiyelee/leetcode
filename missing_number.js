/**
 * @param {number[]} nums
 * @return {number}
 */
// this solution may overflow
//var missingNumber = function(nums) {
//  var len = nums.length;
//  var expect = (len * (len + 1))/2;
//
//  var sum = 0;
//  for (var i = 0; i < len; i++) {
//    sum += nums[i];
//  }
//
//  return expect - sum;
//};

var missingNumber = function(nums) {
  var sum = 0;

  sum = nums.reduce(function (previous, current, index) {
    return previous ^ current ^ index;
  }, sum);

  sum ^= nums.length;

  return sum;
};


var assert = require('assert');

assert.equal(missingNumber([1,2,3]), 0);
assert.equal(missingNumber([0,2,3]), 1);
assert.equal(missingNumber([0,1,2,4]), 3);
