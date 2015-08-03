/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) return true;
  var str = n.toString(2);

  return str.charAt(0) === '1' && parseInt(str.substr(1)) === 0;
};


// method 2
// bit manipulation
var isPowerOfTwo = function(n) {
  return n >0  && (n & (n-1) === 0);
};
var eq = require('assert').equal;

eq(isPowerOfTwo(2), true);
eq(isPowerOfTwo(1), true);
eq(isPowerOfTwo(4), true);
