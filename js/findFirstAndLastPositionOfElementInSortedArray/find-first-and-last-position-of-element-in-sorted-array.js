/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = -1;
  let right = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const midValue = nums[mid];
    if(midValue === target) {
      right = left = mid;

      // this approach is easier to understand
      // go all the way right until see a non-target value
      let i = mid + 1;
      while (i <= high && nums[i] === target) {
        right = i;
        i ++;
      }

      // go all the way left until see a non-target value
      let j = mid - 1;
      while(j >= low && nums[j] === target) {
        left = j;
        j --;
      }

      break;
    }

    if (midValue < target) low = mid + 1;
    if (midValue > target) high = mid - 1;
  }

  return [left, right];
};

const eq = require('assert').deepStrictEqual

eq(searchRange([5, 6, 7, 7, 8, 8, 8, 10], 8), [4, 6]);
eq(searchRange([5,7,7,8,8,10], 8), [3, 4]);
eq(searchRange([5,7,7,8,8,10], 6), [-1, -1]);
eq(searchRange([], 0), [-1, -1]);
