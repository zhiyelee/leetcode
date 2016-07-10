/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // A unicode value 65
  var s = 65;
  var ans = '';
  while (n) {
    n -= 1;
    var tmp = String.fromCharCode(s + n % 26)
    ans = tmp + ans;

    n = Math.floor(n / 26);
  }

  return ans;
};


var eq = require('assert').equal;

eq(convertToTitle(27), 'AA')
eq(convertToTitle(26), 'Z')
eq(convertToTitle(703), 'AAA')
