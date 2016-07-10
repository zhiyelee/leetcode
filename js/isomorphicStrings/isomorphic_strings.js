/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var s = s.split('');
  var t = t.split('');

  if (new Set(s).size !== new Set(t).size) return false;

  var zip = new Set();
  s.forEach(function (item, i) {
    zip.add(s[i] + ' ' + t[i])
  });

  return new Set(zip).size === new Set(s).size;
};

var eq = require('assert').equal;

eq(isIsomorphic('egg', 'add'), true);
eq(isIsomorphic('egg', 'ddd'), false);
