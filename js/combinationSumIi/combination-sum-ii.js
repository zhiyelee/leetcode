/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const nums = candidates.sort(function (a, b) {
    return a - b;
  })

  const result = [];
  getSolution([], nums, target, result);

  return result;
};

function getSolution(current, arr, target, result) {

  if (arr[0] > target) return;

  const len = arr.length;
  var hash = {};
  for (var i = 0; i < len; i++) {
    var val = arr[i];
    var newCurrent = [].concat(current, [val]);
    if (val > target) break;
    if (hash[val]) continue;

    if (val === target) {
       result.push(newCurrent);
       break;
    } else {
      getSolution(newCurrent, arr.slice(i + 1), target - val, result)
    }

    hash[val] = 1;
  }
}


const eq = require('assert').deepEqual;

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
