/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var ph = pattern.split('');
  var sh = str.split(' ');
  var hash = {};

  if (ph.length !== sh.length) return false;

  for (var i = 0; i < ph.length; i++) {
    var p = ph[i];
    var s = sh[i];

    if (!hash[p]) {
      var idx = sh.indexOf(s);
      if (!(p in hash) && idx !== -1 && idx < i) {
        return false;
      }
      hash[p] = s;
    } else {
      if (hash[p] !== s) return false;
    }
  }

  return true;
};


var eq = require('assert').equal;

eq(wordPattern('abba', 'a b b a'), true);
eq(wordPattern('abba', 'a b b b'), false);
eq(wordPattern('abba', 'b b b b'), false);
