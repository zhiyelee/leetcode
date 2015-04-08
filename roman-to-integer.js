var assert = require('assert');

/**
 * @param {string} str
 * @returns {number}
 */
var romanToInt = function(str) {
  var dict = {
    'M': 1000
    , 'CM': 900
    , 'D': 500
    , 'CD': 400
    , 'C': 100
    , 'XC': 90
    , 'L': 50
    , 'XL': 40
    , 'X': 10
    , 'IX': 9
    , 'V': 5
    , 'IV': 4
    , 'I': 1
  };

  var sum = 0;
  for (var i = 0; i < str.length;) {
    var part = '';
    if ( i + 1 < str.length) {
      part = str.substr(i, 2);
      if (dict[part]) {
        sum += dict[part];
        i += 2;
        continue;
      }
    }

    sum += dict[str[i]];
    i++;
  }

  return sum;
};


assert.equal(romanToInt('MMXV'), 2015, 'pass');
assert.equal(romanToInt('MLXVI'), 1066, 'pass');
assert.equal(romanToInt('MCMIV'), 1904, 'pass');
