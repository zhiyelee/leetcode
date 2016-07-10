/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 1 3 4 5 6 5 6 5 6 5 7

  var length = s.length;
  if (length <= 1) return s;

  var len = 1;
  var ans;

  for (var i = 0; i < length - 1; i ++) {
    // abba pattern
    var even = getSub(s, i, i + 1);
    // aba pattern
    var odd = getSub(s, i - 1, i + 1)
    odd[0] += 1;

    var tmp = even[0] > odd[0] ? even : odd;
    if (tmp[0] > len) {
      len = tmp[0];
      ans = s.substr(tmp[1], len);
    }
  }

  return ans;
};

// find longest palindrome
// left and right is the start point to search two direction
function getSub(s, left, right) {
  var length = s.length;
  var len = 0;
  while (left >= 0 && right <= length - 1) {
    if (s.charAt(left) === s.charAt(right)) {
      len += 2;
      left -= 1;
      right += 1;
    } else {
      break;
    }
  }

  return [len, left + 1];
}


var eq = require('assert').equal;

eq(longestPalindrome('123456654345665'), '56654345665');
eq(longestPalindrome('1232112'), '12321');
eq(longestPalindrome('11'), '11');
