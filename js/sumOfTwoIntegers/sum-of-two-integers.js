/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

  var sum = a;

  // @see https://en.wikipedia.org/wiki/Adder_%28electronics%29#Half_adder
  while (b !== 0) {
    // calculate sum without the carry
    sum = a ^ b;
    // calculate carry
    b = (a & b) << 1;

    a = sum;
  }

  return sum;
};


var eq = require('assert').equal;

eq(getSum(0, 1) , 1);
eq(getSum(1, 0) , 1);
eq(getSum(11, 3) , 14);
