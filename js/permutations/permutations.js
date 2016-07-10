/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [];

  if(nums.length === 1) {
    return [nums];
  }

  nums.forEach(function (val, index) {
    var newNums = nums.slice(0);
    newNums.splice(index, 1);

    var sorts = permute(newNums).map(function (item) {
      return [val].concat(item);
    });

    res = res.concat(sorts);
  })

  return res;
};


var eq = require('assert').deepEqual;

eq(permute([1]), [[1]]);
eq(permute([1, 2]), [[1, 2], [2, 1]]);
eq(permute([1, 2, 3]), [
  [1, 2, 3], [1, 3, 2],
  [2, 1, 3], [2, 3, 1],
  [3, 1, 2], [3, 2, 1]
]);
