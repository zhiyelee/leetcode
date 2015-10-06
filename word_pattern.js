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
  if (new Set(ph).size !== new Set(sh).size) return false;

  for (var i = 0; i < ph.length; i++) {
    var p = ph[i];
    var s = sh[i];

    if (hash[p] && hash[p] !== s) return false;
    if (!hash[p]) { hash[p] = s; }
  }

  return true;
};


var eq = require('assert').equal;

eq(wordPattern('abba', 'a b b a'), true);
eq(wordPattern('abba', 'a b b b'), false);
eq(wordPattern('abba', 'b b b b'), false);
