/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1 2 0 3 4 5 0 0  0 6 7
  var slow = nums.indexOf(0);

  if (!~slow) return;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && i > slow) {
      nums[slow ++] = nums[i];
    }
  }

  if (slow !== -1) {
    while (slow < nums.length) {
      nums[slow++] = 0;
    }
  }
};


var eq = require('assert').deepEqual;

var arr = [1, 2, 3, 0, 0 , 0, 4, 1, 0];
moveZeroes(arr);
eq(arr, [1,2,3,4,1, 0, 0, 0, 0]);

arr = [1, 2, 3];
moveZeroes(arr);
eq(arr, [1,2,3]);

arr = [0, 1, 2, 3];
moveZeroes(arr);
eq(arr, [1,2,3, 0]);

arr = [];
moveZeroes(arr);
eq(arr, []);
