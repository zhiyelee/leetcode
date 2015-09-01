/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a || b;
  }

  var maxL = a.length > b.length ? a.length : b.length;
  var carry = 0;

  a = a.split('').reverse();
  b = b.split('').reverse();

  var sum = [];

  var i = 0;
  while (i < maxL) {
    var add1 = b[i] || 0;
    var add2 = a[i] || 0;

    var tmp = parseInt(add1) + parseInt(add2) + carry;
    sum[i] =  tmp%2;
    carry =  tmp >> 1;
    i++;
  }

  if (carry) {
    sum[i] = carry;
  }

  return sum.reverse().join('');
};

// test
var assert = require('assert');
assert.equal(addBinary('10010', '111'), '11001');
