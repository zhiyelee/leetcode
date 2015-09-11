/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//  // binary search solution O(n*n)
//  var twoSum = function(numbers, target) {
//    var low;
//    var high;
//    var mid;
//
//    for (var i = 0; i < numbers.length; i ++) {
//      low =  i + 1;
//      high = numbers.length - 1;
//
//      while(low <= high) {
//        mid = low + ((high - low) >> 1);
//        var val = numbers[i] + numbers[mid];
//
//        if (val === target) return [i + 1, mid + 1];
//
//        if (val > target) {
//          high = mid - 1;
//        } else {
//          low = low + 1;
//        }
//      }
//    }
//  };

// two-pointer O(n) time , O(1) space
//  var twoSum = function(numbers, target) {
//    var len = numbers.length;
//    var low = 0;
//    var high = len - 1;
//    var val;
//    while (low < high) {
//      val = numbers[low] + numbers[high];
//      if (val === target) {
//        break;
//      }
//
//      if(val > target) {
//        high = high - 1;
//      } else {
//        low = low + 1;
//      }
//
//    }
//
//    return [low+ 1, high + 1]
//  }

// use hash, O(n)
var twoSum = function(numbers, target) {
  var dict = {};

  var num;
  for (var i = 0; i < numbers.length; i++) {
    num = numbers[i];
    if (dict[target - num] !== undefined) {
      return [dict[target - num] + 1, i + 1]
    }

    dict[num] = i;
  }
}

var eq = require('assert').deepEqual;

eq(twoSum([2, 7], 9), [1, 2])
eq(twoSum([2, 7, 11, 15], 17), [1, 4])
eq(twoSum([2, 7, 11, 15], 9), [1, 2])
