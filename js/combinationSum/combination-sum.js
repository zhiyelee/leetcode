/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var nums = candidates.sort(function (a, b) {
    return a - b;
  })
  var result = [];

  getSolution([], nums, target, result);

  return result;
};

function getSolution(current, arr, target, result) {
  var len = arr.length;
  if (arr[0] > target) return;

  for (var i = 0; i < len; i ++) {
    var val = arr[i];

    if (val > target) continue;

    var t = target;
    var newCurrent = current;
    while (val <= t) {
      newCurrent = [].concat(newCurrent, [val]);

      if (val === t) {
        result.push(newCurrent);
        break;
      }

      getSolution(newCurrent, arr.slice(i + 1), t - val, result);

      t = t - val;
    }
  }
}


var eq = require('assert').deepEqual;
eq(combinationSum([2, 3, 6, 7], 7), [
   [2, 2, 3],
   [7]
]);

// order doesn't matter
eq(combinationSum([48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23], 69), [
  [ 20, 23, 26  ],
  [ 20, 24, 25  ],
  [ 20, 49  ],
  [ 20, 20, 29  ],
  [ 22, 23, 24  ],
  [ 22, 47  ],
  [ 22, 22, 25  ],
  [ 23, 46  ],
  [ 23, 23, 23  ],
  [ 24, 45  ],
  [ 26, 43  ],
  [ 28, 41  ],
  [ 29, 40  ],
  [ 32, 37  ],
  [ 33, 36  ]
]);

