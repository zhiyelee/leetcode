/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var major;
  var count = 0;
  var mid = (nums.length >> 1);

  for (var i = 0; i< nums.length; i ++) {
    var val = nums[i];
    if (count === 0) {
      count = 1;
      major = val;
    } else if (major === val) {
      count ++;
    } else {
      count --;
    }

    if (count > mid) break;
  }

  return major;
};


var eq = require('assert').equal;
eq(majorityElement([1, 2, 3, 4, 5, 5, 5, 5, 5]), 5);
eq(majorityElement([1, 2, 5, 5, 5, 5]), 5);
eq(majorityElement([5, 5, 3]), 5);
