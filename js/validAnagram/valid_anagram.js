/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  var hashA = hashrify(s);
  var hashB = hashrify(t);

  if (Object.keys(hashA).length !== Object.keys(hashB).length) return false;

  return !Object.keys(hashA).some(function (key) {
    return hashA[key] !== hashB[key];
  })

};

function hashrify(s) {
  var hash = {};
  var i;
  for (i = 0; i< s.length; i++) {
    var val =  s.charAt(i);

    if (hash[val]) {
      hash[val] ++;
    } else {
      hash[val] = 1;
    }
  }

  return hash;
}

var assertEq = require('assert').equal;

assertEq(isAnagram('a', 'b'), false)
assertEq(isAnagram('abbba', 'bbbab'), false)
assertEq(isAnagram('aaaa', 'aaaa'), true)

