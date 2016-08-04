/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  var result = [];
  getSolutions('', word, result);
  return result;
};

function getSolutions(current, str, result) {
  if (str.length === 0) {
    result.push(current);
    return;
  }

  // add first char without converting
  getSolutions(current + str.charAt(0), str.substr(1), result);

  // can't produce continuous numbers in the result
  var lastChar = current.substr(-1);
  if (lastChar && /[0-9]/.test(lastChar)) return;

  for (var i = 1; i <= str.length; i ++) {
    var val = str.substr(0, i);
    getSolutions(current + i, str.substr(i), result);
  }
}

var eq = require('assert').deepEqual;
eq(generateAbbreviations('word'), [
  'word',
  'wor1',
  'wo1d',
  'wo2',
  'w1rd',
  'w1r1',
  'w2d',
  'w3',
  '1ord',
  '1or1',
  '1o1d',
  '1o2',
  '2rd',
  '2r1',
  '3d',
  '4'
]);
