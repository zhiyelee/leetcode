/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  var result = [];

  getSolution([], 1, n, k, result);
  return result;

};

function getSolution(current, begin, n, k, result) {
  if (k === 0) {
     result.push(current);
     return;
  }

  for (var i = begin; i <= n; i ++) {

    // concat can't pass leetcode test for Time Limit Exceeded, but slice and push can pass
    // getSolution([].concat(current, [i]), i + 1, n,  k - 1, result);

    var newCurrent = current.slice(0);
    newCurrent.push(i);

    getSolution(newCurrent, i + 1, n, k - 1, result);
  }
}

var eq = require('assert').deepEqual;

eq(combine(4, 2), [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
])
