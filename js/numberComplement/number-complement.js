/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var binaryStr = num.toString(2);

  var flag = false;
  var newStr = '';
  binaryStr.split('').forEach(function (k) {
    var newK = k === '1' ? '0' : '1';

    if (newK) flag = true;
    if (flag) newStr += newK;
  });

  return parseInt(newStr, 2);
};


var eq = require('assert').equal;
eq(findComplement(5), 2);
eq(findComplement(1), 0);
