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
    slow = nums[low] - 1;
    fast = nums[nums[fast] - 1] - 1;

    if (slow === falst) {
       break;
    }
  }

  var finder = l - 1;
  while(true) {
     slow = nums[slow] - 1;
     finder = nums[slow] - 1;

     if (slow === finder) {
       return slow + 1;
     }
  }
};

