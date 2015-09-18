/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, a, b) {
  var idxA;
  var idxB;
  var min;

  words.forEach(function (val, i) {
    if (val === a) {
      idxA = i;
      if (min) {
        min = Math.min(min, Math.abs(idxA - idxB));
      } else {
        if (idxB !== undefined) {
          min = Math.abs(idxA - idxB);
        }
      }
    }

    if (val === b) {
      idxB = i;
      if (min) {
        min = Math.min(min, Math.abs(idxB - idxA));
      } else {
        if (idxA !== undefined) {
          min = Math.abs(idxB - idxA);
        }
      }
    }

    if (min === 1) return;
  });

  return min;
};

var eq = require('assert').equal;

eq(shortestDistance(['a', 'b'], 'a', 'b'), 1)
eq(shortestDistance(["a","c","b","a"], 'a', 'b'), 1)
