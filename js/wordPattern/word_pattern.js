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

  var zip = new Set();

  ph.forEach(function (item, i) {
    zip.add(ph[i] + ' ' + sh[i]);
  });

  return zip.size === new Set(ph).size;
};


var eq = require('assert').equal;

eq(wordPattern('abba', 'a b b a'), true);
eq(wordPattern('abba', 'a b b b'), false);
eq(wordPattern('abba', 'b b b b'), false);
