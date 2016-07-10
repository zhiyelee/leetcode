/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  var mem = [];
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    var min = nums[i];
    var idx = i;
    for (var k = i + 1; k < len; k++) {
      if (nums[k] < min) {
        min = nums[k];
        idx = k;
      }
    }

    var tmp = [];
    mem.forEach(function (item) {
      // use concat instead of push, to clone item, instead of changing
      var val = [].concat(item, min);
      tmp.push(val);
    });

    // make i the latest smallest one
    swap(nums, i, idx);
    mem = mem.concat(tmp);
    mem.push([min]);
  }

  mem.push([]);
  return mem;
};

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


var eq = require('assert').equal;

eq(subsets([4, 2, 3]).length, 8)
