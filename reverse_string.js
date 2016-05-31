/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
  return s.split('').reverse().join('');
};

var eq = require('assert').equal;

eq(reverseString('hello'), 'olleh');
eq(reverseString(''), '');
eq(reverseString('h'), 'h');
