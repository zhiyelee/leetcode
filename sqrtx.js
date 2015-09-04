/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var low = 0;
  var high = x;
  var sq;
  var pre;
  if (x === 0) return 0;

  while (low <= high) {
    var i = Math.floor((high + low)/2);
    sq = i * i;
    if (sq === x)  return i;

    if (sq > x) {
      high = i - 1;
    } else {
      pre = i;
      low = i + 1;
    }
  }

  return pre;
};


var eq = require('assert').equal;
eq(mySqrt(5), 2);
eq(mySqrt(4), 2);
eq(mySqrt(11), 3);
