/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (!divisor) return MAX_INT;
  var sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (divisor === 1) return !~sign ? -dividend: dividend;

  var res;
  var sum = 0;
  console.log(dividend, divisor)
  while (dividend >= divisor) {
    var val = divisor;
    var ans = 1;
    while (dividend >= (val << 1)) {
  console.log(dividend, val << 1, 'loop', ans << 1)
      val <<= 1;
      ans <<= 1;
    }

    console.log(val, ans)
    dividend -= val;
    sum += ans;
    console.log(dividend, divisor)
  }

  if (!~sign) sum =  -sum;
  return sum;
};


var eq = require('assert').equal;

eq(divide(18, 2), 9);
eq(divide(32, -2), -16);
eq(divide(2147483647, 2), -16);
