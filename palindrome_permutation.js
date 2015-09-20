/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  var hash = {};

  for(var i = 0; i< s.length; i ++) {
    val = s.charAt(i);
    hash[val] = hash[val] ? (hash[val] + 1) : 1;
  }

  return Object.keys(hash).reduce(function (pre, item) {
    return pre + (hash[item] % 2 === 0 ? 0 : 1);
  }, 0) <= 1;
};

var eq = require('assert').equal;

eq(canPermutePalindrome('bba'), true);
eq(canPermutePalindrome('aa'), true);
eq(canPermutePalindrome('a'), true);
eq(canPermutePalindrome('ab'), false);
