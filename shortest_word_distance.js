/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, a, b) {
  var idxA = -1;
  var idxB = -1;
  var min = Infinity;

  words.forEach(function (val, i) {
    if (val === a) {
      idxA = i;
    }

    if (val === b) {
      idxB = i;
    }

    if (~idxA && ~idxB) {
      min = Math.min(min, Math.abs(idxA - idxB));
    }
  });

  return min;
};

var eq = require('assert').equal;

eq(shortestDistance(['a', 'b'], 'a', 'b'), 1)
eq(shortestDistance(["a","c","b","a"], 'a', 'b'), 1)
