/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  [].splice.apply(nums, [0, 0].concat(nums.splice(-k, k)));
};

var eq = require('assert').deepEqual;

var num = [1,2];
rotate(num, 1);
eq(num, [2, 1]);

num = [1,2];
rotate(num, 3);
eq(num, [2, 1]);

num = [1,2,3,4,5,6,7];
rotate(num, 3);
eq(num, [5,6,7,1,2,3,4]);
