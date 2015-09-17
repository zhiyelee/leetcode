/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // https://en.wikipedia.org/wiki/Digital_root
  return num ? num - 9 * Math.floor((num - 1)/9) : 0;

};


var eq = require('assert').equal;

eq(addDigits(0), 0);
eq(addDigits(18), 9);
eq(addDigits(21), 3);
