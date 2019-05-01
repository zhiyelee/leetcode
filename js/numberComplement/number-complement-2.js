/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return Math.pow(2, num.toString(2).length) - num -1;
};


var eq = require('assert').equal;
eq(findComplement(5), 2);
eq(findComplement(1), 0);
