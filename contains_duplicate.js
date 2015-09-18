/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var hash = {};

  return nums.some(function (val) {
    if (hash[val]) return true;
    hash[val] = 1;
  });
};


var eq = require('assert').equal;

eq(containsDuplicate([1,2,3]), false);
eq(containsDuplicate([1,2,1]), true);
eq(containsDuplicate([]), false);
