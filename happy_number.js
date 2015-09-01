/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var mem = [];

  while (true) {
    var arr = n.toString().split('');
    console.log(arr)

    n = arr.reduce(function (pre, current) {
      current = parseInt(current);
      return pre + current * current;
    }, 0)
    console.log(n)

    if (n === 1) return true;
    if (mem.indexOf(n) !== -1) {
      return false;
    }

    mem.push(n);
  }
};


var eq =  require('assert').equal;

eq(isHappy(19), true);
eq(isHappy(18), false);
