/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var low;
  var high;
  var mid;

  for (var i = 0; i < numbers.length; i ++) {
    low =  i + 1;
    high = numbers.length - 1;

    while(low <= high) {
      mid = low + ((high - low) >> 1);
      var val = numbers[i] + numbers[mid];

      if (val === target) return [i + 1, mid + 1];

      if (val > target) {
        high = mid - 1;
      } else {
        low = low + 1;
      }
    }
  }
};

var eq = require('assert').deepEqual;

eq(twoSum([2, 7], 9), [1, 2])
eq(twoSum([2, 7, 11, 15], 17), [1, 4])
eq(twoSum([2, 7, 11, 15], 9), [1, 2])
