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

/**
 * serialize `str` to get it start with `a`
 * */
function getKey(str) {
  while (str.charAt(0) !== 'a') {
    var arr = str.split('');

    for (var i = 0; i < arr.length; i ++) {
      if (arr[i] === 'a') {
        arr[i] = 'z';
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
      }
    }

    str = arr.join('');
  }

  return str;
}


var eq = require('assert').deepEqual;

// @note this problem doesn't require the order of groups
eq(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']), [
  ['abc','bcd','xyz'],
  ['acef'],
  ['az','ba'],
  ['a','z']
]);

