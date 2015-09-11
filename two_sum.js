/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hash = {};

  var val;
  for (var i = 0; i < nums.length; i ++) {
    val = nums[i];
    if (hash[target - val]) {
      return [hash[target -  val], i + 1];
    }

    hash[val] = i + 1;
  }
};


var eq = require('assert').deepEqual;

eq(twoSum([2, 7, 11, 15], 9), [1, 2])
eq(twoSum([2, 11, 13, 15], 17), [1, 4])
