/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // {
  //  'a1e1t1': ['ate']
  // }
  var dicts = {};
  var arrs = [];

  for (var i = 0; i < strs.length; i ++) {
    var val = strs[i];
    var key = toKey(val);

    if (dicts[key]) {
      dicts[key].push(val);
    } else {
       arrs.push([val]);

       dicts[key] = arrs[arrs.length - 1];
    }
  }

  return arrs.map(function(arr) {
    return arr.sort();
  });
};

function toKey(str) {
  var d = {};
  for (var i = 0; i < str.length; i ++) {
    var k = str.charAt(i);

    if (d[k]) {
      d[k]++;
    } else {
      d[k] = 1;
    }
  }


  var key = '';
  for(var j = 97; j < 123; j ++) {
    var c = String.fromCharCode(j);
    if (!d[c]) continue;

    key += c + d[c];
  }

  return key;
}


var eq = require('assert').deepEqual;

eq(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
   ['ate', 'eat', 'tea'],
   ['nat', 'tan'],
   ['bat']
]);
