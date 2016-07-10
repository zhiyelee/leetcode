/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n > 5) {
    if (n % 5 === 0) {
      n /= 5;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 2 === 0) {
      n /= 2;
    } else {
      return false;
    }
  }

  return true;
};


var eq = require('assert').equal;

eq(isUgly(1), true)
eq(isUgly(2), true)
eq(isUgly(6), true)
eq(isUgly(7), false)
eq(isUgly(14), false)

