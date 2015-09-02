/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  var factor2 = 2,
    factor3 = 3,
    factor5 =5;

  var ugly = [1];

  for (var i = 1; i < n; i++) {
    var min = Math.min.call(null, factor2, factor3, factor5);
    ugly.push(min);

    if (factor2 === min) {
      factor2 = 2 * ugly[++idx2];
    }

    if (factor3 === min) {
      factor3 = 3 * ugly[++idx3];
    }

    if (factor5 === min) {
      factor5 = 5 * ugly[++idx5];
    }
  }

  return ugly[n-1];
};


var eq = require('assert').equal;

eq(nthUglyNumber(3), 3);
eq(nthUglyNumber(10), 12);

