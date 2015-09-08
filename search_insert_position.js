/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 1 3 5 6   5, 2
  // 1 3 5 6   2, 1
  // 4         2, 0
  var len = nums.length;
  var l = 0;
  var r = nums.length - 1;

  if (len === 0) return 0;
  if (target <= nums[0]) return 0;
  if (target > nums[len - 1]) return len;


  var mid;
  while (l <= r) {
    mid = l + ((r - l) >> 1);

    // when equal, insert before the index, means use current index
    if (target === nums[mid]) return mid;

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = l + 1;
    }
  }

  return l;
};


var eq = require('assert').equal;

eq(searchInsert([1, 2, 4, 5, 6], 3), 2);
eq(searchInsert([1, 2, 4, 5, 6], 4), 2);
eq(searchInsert([1, 2, 5, 6], 7), 4);
eq(searchInsert([1], 3), 1);
eq(searchInsert([4], 3), 0);
