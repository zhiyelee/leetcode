/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

  var result = [];
  getSolutions([], s, result);
  return result;
};

function getSolutions(current, str, result) {
  if (current.length > 3) return;

  for (var l = 1; l <= 3 && l <= str.length; l ++) {
    var val = str.slice(0, l);

    // start with 0 but not '0'
    if (l > 1 && val.charAt(0) === '0') return;

    // not valid ip number
    if (parseInt(val, 10) > 255) return;

    var newCurrent = [].concat(current, [val]);

    // valid
    if (val === str && newCurrent.length === 4) {
       result.push(newCurrent.join('.'));
       return;
    }

    getSolutions(newCurrent, str.slice(l), result);
  }
}

var eq = require('assert').deepEqual;

eq(restoreIpAddresses('25525511135'), [ '255.255.11.135', '255.255.111.35' ]);

eq(restoreIpAddresses('0000'), ['0.0.0.0']);
eq(restoreIpAddresses('0100'), ['0.1.0.0']);
