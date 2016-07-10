/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (!divisor) return +Infinity;
  var sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (divisor === 1) return !~sign ? -dividend: dividend;

  var res;
  var sum = 0;
  while (dividend >= divisor) {
    var val = divisor;
    var ans = 1;
    // val << 1 may overflow to negative
    while (dividend >= (val << 1) && (val << 1) > 0) {
      val <<= 1;
      ans <<= 1;
    }

    dividend -= val;
    sum += ans;
  }

  if (!~sign) sum =  -sum;
  return sum;
};


var eq = require('assert').equal;

eq(divide(18, 2), 9);
eq(divide(32, -2), -16);
eq(divide(2147483647, 2), 1073741823);
