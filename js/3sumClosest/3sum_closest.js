/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // first sort, then use 2sum method
  nums.sort(function (a, b) {
    return a - b;
  })

  var len = nums.length;
  var min = nums[0] + nums[1] + nums[2];
  // suppose length must >= than 3
  if (nums.length === 3) return min;

  for (var i = 0; i < len; i++) {
    // two pointer, narrow to find the target
    var low = i + 1;
    var high = len - 1;

    while(low < high) {
      var sum = nums[low] + nums[high] + nums[i];

      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
        if (sum === target) return target;
      }

      if(sum < target) {
        low += 1;
      } else {
        high = high - 1;
      }
    }
  }

  return min;
};

var eq = require('assert').equal;

// -4 -1 1 2, 1
eq(threeSumClosest([-1, 2, 1, -4], 1), 2);
eq(threeSumClosest([-1, 2, 1], 4), 2);
eq(threeSumClosest([-1, 2, 1, 1], 1), 1);
eq(threeSumClosest([0,2,1,-3], 1), 0)
