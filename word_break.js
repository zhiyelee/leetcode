/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  s = '#' + s;
  var dp = [true];

  for (var i = 1; i < s.length; i ++) {
    for (var k = 0; k < i; k ++) {
      if (dp[k] && wordDict.has(s.substr(k + 1, i-k))) {
        dp[i] = true;
        break;
      }
    }
  }

  return !!dp[s.length - 1]
};



var eq = require('assert').equal;
eq(wordBreak('leetcode', new Set(['leet', 'code'])), true);
eq(wordBreak('leettcode', new Set(['leet', 'code'])), false);
eq(wordBreak('leet', new Set(['leet'])), true);
eq(wordBreak('a', new Set(['a'])), true);
eq(wordBreak('a', new Set([])), false);
