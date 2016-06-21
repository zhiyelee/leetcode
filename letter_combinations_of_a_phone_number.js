/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var map = [ '0', '1', ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

  if (digits.length === 0) return [];
  var digitsArr = digits.split('').map((val) => parseInt(val, 10)).map((val) => map[val]);

  var res = [];
  for (var i = 0; i < digitsArr.length; i++) {
    res = merge(res, digitsArr[i]);
  }

  return res;
};

function merge(srcArr, letters) {
  if (srcArr.length === 0) {
    return letters.slice(0);
  }

  var res = [];

  for (var i = 0; i < letters.length; i ++) {
    var val = letters[i];

    srcArr.forEach(item => {
      res.push(item + val);
    });
  }

  return res;
}

var eq = require('assert').deepEqual;

eq(letterCombinations('23'), [ 'ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf']);
eq(letterCombinations(''), []);

