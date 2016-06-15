/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  var dicts = {};
  var gs = [];

  for (var i = 0; i < strings.length; i ++) {
    var val = strings[i];
    var key = getKey(val);

    if (dicts[key]) {
      dicts[key].push(val);
    } else {
      gs.push([val]);
      dicts[key] = gs[gs.length - 1];
    }
  }

  return gs;
};

//  encode string with distance of two adjacent charactors,
//  return `-11-2` etc
function getKey(str) {
  var key = '';
  for(var i = 1; i < str.length; i ++) {
    var val = str.charCodeAt(i);
    var preVal = str.charCodeAt(i - i);

    var d = val - preVal;
    if (val < preVal) {
      d = val - preVal + 26;
    }

    // distance could be `11`, need to distinguish with `'1'` + `'1'`
    key += '-' + d;
  }

  return key;
}

var eq = require('assert').deepEqual;

// @note this problem doesn't require the order of groups
eq(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']), [
  ['abc','bcd','xyz'],
  ['acef'],
  ['az','ba'],
  ['a','z']
]);

eq(groupStrings(['abc','am']), [
   ['abc'],
   ['am']
]);
