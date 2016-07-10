/**
 * @param {string} str
 * @returns {string}
 */
// O(n) space
var reverseWords = function(str) {
  var words = str.trim().split(/\s+/);

  return words.reverse().join(' ')
};

var eq = require('assert').equal;

eq(reverseWords(' the sky is blue'), 'blue is sky the');
eq(reverseWords('the  sky is blue'), 'blue is sky the');
eq(reverseWords('the  sky is blue!'), 'blue! is sky the');
eq(reverseWords('the  sky is blue !'), '! blue is sky the');
