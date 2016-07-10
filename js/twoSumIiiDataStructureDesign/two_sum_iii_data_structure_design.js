/**
 * @constructor
 */
var TwoSum = function() {
  this.dict = {};
};

/**
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
  // no need to bigger that 2
  this.dict[input] = this.dict[input] ? 2 : 1;
};

/**
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
  var dict = this.dict;
  var keys = Object.keys(dict);

  for (var i = 0; i < keys.length; i++) {
    var key = parseInt(keys[i]);
    var target = val - key;

    if (!dict[target]) continue;

    if ((target === key && dict[target] === 2) ||
        target !== key) {
      return true;
    }
  }

  return false;
};

var eq = require('assert').equal;
var ts = new TwoSum();

ts.add(0);
ts.find(0)
eq(ts.find(0), false);

ts = new TwoSum();
ts.add(0);
ts.add(0);
ts.find(0)
eq(ts.find(0), true);

ts = new TwoSum();
ts.add(1);
ts.add(3);
ts.add(5);
eq(ts.find(1), false);
eq(ts.find(4), true);
eq(ts.find(7), false);
