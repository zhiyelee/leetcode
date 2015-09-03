/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  dict = [];
  for (var v of wordDict) {
    dict.push(v);
  }

  return isMatch(s, dict, 0);
};

function isMatch(s, dict, idx) {
  var sl = s.length;
  if (idx === sl) return true;

  for (var i = 0; i < dict.length; i++) {
    var val = dict[i];
    if (s.indexOf(val, idx) === idx) {
      if (isMatch(s, dict, idx + val.length)) return true;
    }
  }

  return false;
}


var eq = require('assert').equal;
eq(wordBreak('leetcode', new Set(['leet', 'code'])), true);
eq(wordBreak('leettcode', new Set(['leet', 'code'])), false);
eq(wordBreak('leet', new Set(['leet'])), true);
eq(wordBreak('a', new Set(['a'])), true);
eq(wordBreak('a', new Set([])), false);
