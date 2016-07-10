/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[\W]*/g, '').toLowerCase();
  if (s === s.split('').reverse().join('')) return true;

  return false;
};

var eq = require('assert').equal;

eq(isPalindrome('A man, a plan, a canal: Panama'), true);
eq(isPalindrome('race a car'), false);
eq(isPalindrome(''), true);
