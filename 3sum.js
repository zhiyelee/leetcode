/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var res = [];
  var len = nums.length;

  for (var i = 0; i < len - 2; i ++) {

    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    var low = i + 1;
    var high = len - 1;
    var target = -nums[i];

    while (low < high) {
      var val = nums[low] + nums[high];
      if (target === val) {
        res.push([nums[i], nums[low ++], nums[high]]);

        // skip repeated value
        while (low <= high) {
          if (nums[low] > nums[low - 1]) break;
          low ++;
        }
      } else if(val < target) {
        low++;
      } else {
        high --;
      }
    }
  }

  return res;
};

var eq = require('assert').deepEqual;

// return array has same items but maybe different order
eq(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
eq(threeSum([-2, 0, 1, 1, 2]), [[-2, 0, 2], [-2, 1, 1]]);

