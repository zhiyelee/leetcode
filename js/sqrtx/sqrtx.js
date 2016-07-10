/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var low = 0;
  var high = x;
  var pre;
  if (x === 0) return 0;

  while (low <= high) {
    var mid = low + ((high - low) >> 1);

    // in case of overflow, use below instead of mid * mid
    if (mid === x / mid)  return mid;

    if (mid > x / mid) {
      high = mid - 1;
    } else {
      pre = mid;
      low = mid + 1;
    }
  }

  return pre;
};


var eq = require('assert').equal;
eq(mySqrt(1), 1);
eq(mySqrt(5), 2);
eq(mySqrt(4), 2);
eq(mySqrt(11), 3);
