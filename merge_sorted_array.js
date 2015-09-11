/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  var merge = function(nums1, m, nums2, n) {
//    // only keep m items
//    nums1.splice(m, nums1.length - m);
//
//    var low = 0;
//    var high;
//    var mid;
//    for (var i = 0; i < n; i++) {
//      high = m - 1;
//      while (low <= high) {
//        mid = low + ((high - low) >> 1);
//
//        if (nums2[i] === nums1[mid]) {
//          low = mid;
//        }
//        if(nums2[i] < nums1[mid]) {
//          high = mid - 1;
//        } else {
//          low = mid + 1;
//        }
//      }
//
//      nums1.splice(low, 0, nums2[i]);
//      low += 1;
//      m++;
//    }
//  };

//a much clever solution!!!
var merge = function(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while(j >= 0) {
    nums1[k--] = nums2[j--];
  }
}


var eq = require('assert').deepEqual;

var num = [1,3,5];
merge(num, num.length, [2,4], 2);
eq(num, [1,2,3,4,5]);

num = [0];
merge(num, 0, [5], 1);
eq(num, [5]);

num = [4];
merge(num, num.length, [5], 1);
eq(num, [4,5]);

num = [4];
merge(num, num.length, [3], 1);
eq(num, [3,4]);

num = [4, 5];
merge(num, num.length, [4, 5], 2);
eq(num, [4,4, 5, 5]);
