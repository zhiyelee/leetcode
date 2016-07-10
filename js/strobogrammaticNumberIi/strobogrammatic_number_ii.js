/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  return sub(n, n);
};

function sub(n, m) {
  if (n === 0) return [''];
  if (n === 1) return ['0', '1', '8'];

  var tmp = sub(n - 2, m);
  var res = [];

  tmp.forEach(function (item) {
    if (n !== m) {
      res.push('0' + item + '0');
    }

    res.push('1' + item + '1');
    res.push('6' + item + '9');
    res.push('8' + item + '8');
    res.push('9' + item + '6');

  });

  return res;

}


var eq = require('assert').deepEqual;

eq(findStrobogrammatic(2), ["11","69","88","96"]);
eq(findStrobogrammatic(3),
   [
     '101',
     '609',
     '808',
     '906',
     '111',
     '619',
     '818',
     '916',
     '181',
     '689',
     '888',
     '986'
   ]
);
