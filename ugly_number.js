/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n <= 0) return false;

  if (n === 1) return true;

  var excepts = [2, 3, 5];

  var sqrt = Math.sqrt(n);
  if (Math.floor(sqrt) === sqrt && !~excepts.indexOf(sqrt)) return false;

  for (var i = Math.floor(sqrt); i > 0; i--) {
    if (n % i === 0) {
      if (!~excepts.indexOf(i) || !~excepts.indexOf(n / i)) return false;
    }
  }

  return true;
};


var eq = require('assert').equal;

eq(isUgly(2), true)
eq(isUgly(6), true)
eq(isUgly(7), true)
eq(isUgly(14), false)

