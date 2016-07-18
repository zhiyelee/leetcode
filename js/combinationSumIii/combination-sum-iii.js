/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = [];

  getSolution([], arr, n, k, result);

  return result;
};

function getSolution(current, arr, target, size, result) {
  if (size === 1 && (target > 9 || target < arr[0])) return;

  for (var i = 0; i < arr.length; i ++) {
     var val = arr[i];
     var newCurrent = [].concat(current, [val]);
     if (size === 1) {
       if (val === target) {
         result.push(newCurrent);
         break;
       }
       continue;
     } else {
       getSolution(newCurrent, arr.slice(i + 1), target - val, size - 1, result);
     }
  }
}

var eq = require('assert').deepEqual;

eq(combinationSum3(3, 7), [[1, 2, 4]]);
eq(combinationSum3(3, 9), [
  [1, 2, 6],
  [1, 3, 5],
  [2, 3, 4]
]);
