/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var m = '1';
  for (var i = 0; i < n - 1; i ++) {
    m = f(m);
  }

  return m;
};


function f(n) {
  n = n.toString();
  var res = '';
  var count = 0;
  var pre = '';

  if (n == 1) return '11';
  for (var i = 0; i < n.length; i ++) {
    if (pre === n.charAt(i)) {
      count += 1;
    } else {
      res += count ?  `${count}${pre}` : '';
      pre = n.charAt(i);
      count = 1;
    }
  }

  res += `${count}${pre}`;
  return res;
}


var eq = require('assert').equal;

eq(countAndSay(1), '1');
eq(countAndSay(4), '1211');
eq(countAndSay(5), '111221');
