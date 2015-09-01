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
  var len = nums.length;

  var sum = 0;
  // include n + 1
  for (var i = 0; i <= len; i++) {
    sum ^= i;
  }
  for (var j = 0; j < len; j++) {
    sum ^= nums[j];
  }

  return sum;
};


var assert = require('assert');

assert.equal(missingNumber([1,2,3]), 0);
assert.equal(missingNumber([0,2,3]), 1);
