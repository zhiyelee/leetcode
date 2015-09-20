/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var slow = -1;
  var fast = 0;

  for (var i = 0; i < nums.length; i++) {
    var val =  nums[i];

    if (val === 0 && slow === -1) {
      slow = i;
    }

    if (val !== 0) {
      fast = i;
    }
  }
};
