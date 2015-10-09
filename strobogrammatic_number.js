/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  var ns = ('' + num).split('');
  var len = ns.length;
  var specials = [1, 8, 0];
  var mid;

  if (len % 2) {
    mid = parseInt(ns[len >> 1]);
    if (!~specials.indexOf(mid)) return false;
  }

  var l = 0;
  var r = len - 1;
  while (l < r) {
    var vl = parseInt(ns[l]);
    var vr = parseInt(ns[r]);
    if ((vl === vr && ~specials.indexOf(vl)) || (vl === 6 && vr === 9) || (vl === 9 && vr === 6)) {
          l ++;
          r --;
        } else {
          return false;
        }
  }

  return true;
};

var eq = require('assert').equal;

eq(isStrobogrammatic(818), true);
eq(isStrobogrammatic(22), false);
eq(isStrobogrammatic(111), true);
eq(isStrobogrammatic(101), true);
eq(isStrobogrammatic(69269), false);
eq(isStrobogrammatic(69169), true);
