/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var len = nums.length;
  var idx2 = len - 1;
  var idx0 = 0;
  for (var i = 0; i < len; i++) {
    while (nums[i]  === 2 && i < idx2) {
      swap(nums, i, idx2 --);
    }
    while (nums[i] === 0 && i > idx0) {
      swap(nums, i, idx0 ++)
    }
  }
};

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] =  tmp;
}

var eq = require('assert').deepEqual;

var num = [0,1,0,1,2];
sortColors(num);
eq(num, [0,0,1,1,2]);
