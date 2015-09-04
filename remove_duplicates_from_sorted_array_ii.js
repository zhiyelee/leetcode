/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pre = '#';
  var count = 0;
  var appear = 0;
  for(var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if (val === pre) {
      if (appear < 2) {
        count ++;
        appear ++;
      } else {
        nums.splice(i, 1);
        i--;
      }
    } else {
      pre = val;
      appear = 1;
      count ++;
    }
  }

  return count;
};

var eq = require('assert').equal;

eq(removeDuplicates([]), 0)
eq(removeDuplicates(['1', '1', '1']), 2)
eq(removeDuplicates(['1', '1', '1', '2']), 3)
eq(removeDuplicates([1,1,1,2,2,3]), 5)
