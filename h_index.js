/**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function(citations) {
//   if (!citations.length) return 0;
//   citations = citations.sort(function (a, b) {
//     return b - a;
//   });
//
//   var pre = citations[0];
//   var h = Math.min(pre, 1);
//   # dummy node at the end
//   citations.push(-1);
//
//   for (var i = 1; i < citations.length; i++) {
//     var val = citations[i];
//
//     if (pre >= i) {
//       h = i;
//     }
//     pre = val;
//   }
//
//   return h;
// };

// hash solution
var hIndex = function(cs) {
  var possible = [];
  if (cs.length === 0) return 0;

  // possible array length = cs.length + 1, 0 - cs.length
  possible.length = cs.length + 2;
  possible = possible.join('-').split('').map(function() {
    return 0;
  });

  for (var i = 0; i < cs.length; i ++) {
    var val = cs[i];
    possibleAdd(possible, val);
  }

  return Math.max.apply(null, possible);
}

// [4,4,4,4]
// [0, 0, 0 , 0, 0]
function possibleAdd(arr, val) {
  var i = 0;
  while (i < arr.length) {
    // possible[i] == min(i, val)
    //if (val > i && val > arr[i]) {
    //  arr[i] += 1;
    //}
    console.log(i,val)
    if (val > arr[i]) {
      arr[i] = Math.min(i, arr[i] + 1);
    }

    i++;
  }
  console.log(arr)
}


var eq = require('assert').equal;

eq(hIndex([]), 0);
eq(hIndex([0]), 0);
eq(hIndex([2, 2, 2]), 2);
eq(hIndex([3, 0, 6, 1, 5]), 3);
eq(hIndex([5, 4, 6, 1, 5]), 4);
eq(hIndex([5, 6]), 2);

