/**
 * @param {number[]} nums
 *  @return {number[][]}
 **/
var subsetsWithDup = function(nums) {
  return getSolutions(nums, []).concat([[]]);
};

function getSolutions(nums, list) {
  if (nums.length === 0) {
    return [];
  }

  var resNext = getSolutions(nums.slice(1), list);

  var res = [];
  var current = nums[0];
  if (list.indexOf(current) === -1) {
    list.push(current);
    res.push([current]);
  }

  res = [].concat(resNext, res);

  // n and n - 1
  for (var i = 0; i < resNext.length; i++) {
    var val = resNext[i];
    res.push([].concat(current, val));
  }

  return res;
}

console.log(subsetsWithDup([1, 2, 2]))

var eq = require('assert').deepEqual;
