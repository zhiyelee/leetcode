/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var mem = [0, 0, 0];
  for (var i = 0; i < nums.length; i++) {
    mem[nums[i]] += 1;
  }
  for (var i = 0; i < nums.length; i++) {
    if (i < mem[0]) {
      nums.splice(i, 1, 0);
    } else if (i < mem[1] + mem[0]) {
      nums.splice(i, 1, 1);
    } else{
      nums.splice(i, 1, 2);
    }
  }
};

var eq = require('assert').deepEqual;

var num = [0,1,0,1,2];
sortColors(num);
eq(num, [0,0,1,1,2]);
