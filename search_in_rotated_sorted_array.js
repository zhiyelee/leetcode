/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var len = nums.length;
  var low = 0;
  var high = len - 1;

  while(low <= high) {
    mid = low + ((high - low) >> 1);
    var midVal = nums[mid];

    if (midVal === target) return mid;

    if (target < midVal) {
      if ((midVal >= nums[low] && target >= nums[low]) ||
          (target < nums[low] && midVal < nums[low])) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (midVal >= nums[low] ||
         (midVal < nums[high] && target <= nums[high])) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

var eq = require('assert').equal;

eq(search([4, 5, 6, 7, 0, 1, 2], 6), 2);
eq(search([4, 5, 6, 7, 0, 1, 2], 1), 5);
eq(search([4,5,6,7,8,1,2,3], 8), 4);
eq(search([4], 6), -1);
eq(search([4, 5], 5), 1);
eq(search([5, 1, 3], 5), 0);
eq(search([1, 3, 5], 1), 0);
eq(search([5, 1, 2, 3, 4], 1), 1);
