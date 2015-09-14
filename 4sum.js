/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var len = nums.length;
  var ans = [];
  for (var i = 0; i < len - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    for (var j = i + 1; j < len - 2; j ++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      var find = target - (nums[i] + nums[j]);
      var low = j + 1;
      var high = len - 1;

      while(low < high) {
        var sum = nums[low] + nums[high];

        if (sum === find) {
          ans.push([nums[i], nums[j], nums[low], nums[high]]);
          low ++;

          while(low < high) {
            if (nums[low] > nums[low - 1]) break;
            low ++;
          }

          while(low < high) {
            if (nums[high - 1] < nums[high]) break;
            high --;
          }
        }

        if (sum < find) {
          low ++;
        } else {
          high --;
        }
      }
    }
  }

  return ans;
};

var eq = require('assert').deepEqual;

eq(fourSum([1, 0, -1, 0, -2, 2], 0), [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
