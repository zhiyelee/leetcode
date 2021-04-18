/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  const length = height.length;
  for (let left = 0; left < length - 1; left ++) {
    for (let right = length - 1; right > left; right --) {
      const area = (right - left) * Math.min(height[left], height[right]);
      if (area > max) max = area;

      if (height[right] >= height[left]) break;
    }
  }

  return max;
};


var eq = require('assert').strictEqual;
eq(maxArea([4,3,2,1,4]), 16);
eq(maxArea([1,8,6,2,5,4,8,3,7]), 49);
eq(maxArea([1,8,6,2,5,4,8,3,7]), 49);

