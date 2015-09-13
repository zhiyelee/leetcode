/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });

  var len = nums.length;
  var ans = 0;
  for (var i = 0; i < len; i++) {
    var val = nums[i];
    var low = i + 1;
    var high = len - 1;

    while(low < high) {
      var sum = nums[low] + nums[high];
      if (sum + val < target) {
        ans ++;
        var k = high - 1;
        while (low < k) {
          ans ++;
          k --;
        }
        low ++;
      } else {
        high --;
      }
    }
  }

  return ans;
};


var eq = require('assert').deepEqual;

eq(threeSumSmaller([-2, 0, 1, 3], 2), 2);
eq(threeSumSmaller([-2, 0, 3], 2), 1);
