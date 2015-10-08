/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  return s.split('')
  .reverse()
  .reduce(function (pre, item, i) {
    item = item.charCodeAt(0) - 64;
    return pre + item * Math.pow(26, i);
  }, 0);
};

var eq = require('assert').equal;

eq(titleToNumber('Z'), 26);
eq(titleToNumber('AB'), 28);
eq(titleToNumber('AA'), 27);
eq(titleToNumber('AAA'), 703);
