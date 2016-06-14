/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var dicts = {};
  var arrs = [];

  for (var i = 0; i < strs.length; i ++) {
    var val = strs[i];
    var key = val.split('').sort().join('');

    if (dicts[key]) {
      dicts[key].push(val);
    } else {
       arrs.push([val]);

       dicts[key] = arrs[arrs.length - 1];
    }
  }

  return arrs;
};


var eq = require('assert').deepEqual;

// cant test with equal, since this problem doesn't require order inner group
// eq(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
//    ['ate', 'eat', 'tea'],
//    ['nat', 'tan'],
//    ['bat']
// ]);
