/**
 * @param {number[]} nums
 * @return {boolean}
 */
// use some
var containsDuplicate = function(nums) {
  var hash = {};

  return nums.some(function (val) {
    if (hash[val]) return true;
    hash[val] = 1;
  });
};

var containsDuplicate = function(nums) {
  return nums.length > (new Set(nums)).size;
};


var eq = require('assert').equal;

eq(containsDuplicate([1,2,3]), false);
eq(containsDuplicate([1,2,1]), true);
eq(containsDuplicate([]), false);
