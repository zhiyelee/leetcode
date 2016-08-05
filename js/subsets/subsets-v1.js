/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  return getSolutions(nums);
};

function getSolutions(nums) {
  if (nums.length === 0) {
    return [[]];
  }

  var resNext = getSolutions(nums.slice(1));
  var current = nums[0];

  // n and n - 1
  var res = [].concat(resNext);
  for (var i = 0; i < resNext.length; i++) {
    var val = resNext[i];
    res.push([].concat(current, val));
  }

  return res;
}
