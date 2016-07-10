/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // 1 2 3 3 4
  // 1 3 3 3 3
  // solution http://keithschwarz.com/interesting/code/?dir=find-duplicate
  var len = nums.length;

  var slow = len -1;
  var fast = len - 1;
  while(true) {
    slow = nums[slow] - 1;
    fast = nums[nums[fast] - 1] - 1;

    if (slow === fast) {
       break;
    }
  }

  var finder = len - 1;
  while(true) {
     slow = nums[slow] - 1;
     finder = nums[finder] - 1;

     if (slow === finder) {
       return finder + 1;
     }
  }
};


var eq = require('assert').equal;

eq(findDuplicate([1, 2, 3, 3, 4]), 3);
eq(findDuplicate([2, 1, 1]), 1);
