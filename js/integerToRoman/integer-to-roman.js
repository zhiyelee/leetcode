var assert = require('assert')
/**
 * @param {number} num
 * @returns {string}
 */
var intToRoman = function(num) {
  var steps = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    , dict = {
      '1000': 'M', '900': 'CM', '500': 'D', '400': 'CD',
      '100': 'C', '90': 'XC', '50': 'L', '40': 'XL',
      '10': 'X', '9': 'IX', '5': 'V', '4': 'IV',
      '1': 'I'
    };

    var res = '';

    for (var i = 0; i < steps.length; i++) {
      var step = steps[i]
        , m = parseInt(num / step)
        , num = num % step;

      if (m > 0) {
        res += repeat(dict[step], m);
      }

      if (num === 0)  break;
    }

    return res;
};

function repeat(str, num) {
  var res = '';
  while (num > 0) {
    res += str;
    num --;
  }

  return res;
}


assert.equal(intToRoman(2015), 'MMXV');
assert.equal(intToRoman(1066), 'MLXVI', 'fail 1066');
assert.equal(intToRoman(1904), 'MCMIV', 'fail 1904');
