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
  var minDiff = Math.abs(min - target);
  // suppose length must >= than 3
  if (nums.length === 3) return min;

  for (var i = 0; i < len; i++) {
    var find = target - nums[i];

    // two pointer, narrow to find the target
    var low = i + 1;
    var high = len - 1;

    while(low < high) {
      var sum = nums[low] + nums[high];
      var diff = Math.abs(sum - find);

      if (diff === 0) return target;

      if (diff < minDiff) {
        min = sum + nums[i];
        minDiff = diff;
      }

      if(sum < find) {
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
