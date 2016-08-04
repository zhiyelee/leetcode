/**
 * @param {number} n
 * @return {number[]}
 * @note solution see https://is.gd/MiDHHf
 */
var grayCode = function(n) {
  var res = [];
  res.push(0);
  for (var i = 0; i < n; i++) {
    var size = res.length;

    for (var k = size - 1; k >= 0; k --) {
      res.push(res[k] | 1 << i)
    }
  }

  return res;
};

var eq = require('assert').deepEqual;

eq(grayCode(3), [ 0, 1, 3, 2, 6, 7, 5, 4 ]);
eq(grayCode(2), [ 0, 1, 3, 2 ]);
