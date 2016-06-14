/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var va = version1.split('.').map(function (val) { return parseInt(val, 10); });
  var vb = version2.split('.').map(function (val) { return parseInt(val, 10); });

  var len = Math.max(va.length, vb.length);

  for (var i = 0; i < len; i ++) {
    var sa = i < va.length ? va[i] : 0;
    var sb = i < vb.length ? vb[i] : 0;

    if (sa === sb) continue;

    return sa > sb ? 1 : -1;
  }

  return 0;
};


var eq = require('assert').equal;

eq(compareVersion('12.3.11', '1.2.2.2'), 1);
eq(compareVersion('1.1.11', '1.2.0'), -1);
eq(compareVersion('1.1', '1.1'), 0);
eq(compareVersion('0.1', '0.0.1'), 1);
eq(compareVersion('0.1.1', '1.0.1'), -1);
eq(compareVersion('1.0', '1'), 0);
