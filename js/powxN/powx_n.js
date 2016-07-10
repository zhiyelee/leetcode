/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    n = -n;
    x = 1/x;
  }

  var tmp = myPow(x, Math.floor(n/2));
  tmp =  tmp * tmp;

  if (n % 2 === 0) {
    return tmp;
  } else {
    return tmp * x;
  }
}


var eq = require('assert').equal;

eq(myPow(2, 3), 8);
eq(myPow(2, -3), 0.125);
eq(myPow(2, 0), 1);
