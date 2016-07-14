/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length === 1) return [nums];

  var result = [];
  getPermute(nums, 0, result);
  return result;
};

// position before `start` is already done
function getPermute(arr, start, result) {
  if (start >= arr.length - 1) {
    // WARN: be aware of here, use shallow copy
    result.push(arr.slice(0));
    return;
  };

  var res = [];
  var hash = {};
  for (var i = start; i < arr.length; i ++) {
    var val = arr[i];
    if (hash[val]) continue;
    hash[val] = 1;

    swap(arr, i, start);
    getPermute(arr, start + 1, result);
    swap(arr, i, start);
  }
}

function swap(arr, i, j) {
  var vi = arr[i];

  arr.splice(i, 1, arr[j]);
  arr.splice(j, 1, vi);
}

var eq = require('assert').deepEqual;

eq(permuteUnique([1, 2, 1]), [
  [1, 2, 1],
  [1, 1, 2],
  [2, 1, 1]
]);
