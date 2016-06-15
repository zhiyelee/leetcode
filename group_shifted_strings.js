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
  if (str.charAt(0) == 'a') return str;

  // ascii code for a
  var charA = 97;
  // ascii code for z
  var charZ = 122;
  var distance = str.charCodeAt(0) - 97;
  var arr = str.split('');

  for (var i = 0; i < arr.length; i ++) {
    var val = arr[i].charCodeAt(0);

    if (val - distance < charA) {
      val = charZ + 1 - (charA - (val - distance));
    } else {
       val = val - distance;
    }

    arr[i] = String.fromCharCode(val);
  }

  return arr.join('');
}


var eq = require('assert').deepEqual;

// @note this problem doesn't require the order of groups
eq(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']), [
  ['abc','bcd','xyz'],
  ['acef'],
  ['az','ba'],
  ['a','z']
]);

