/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  var result = [];

  getSolutions([], 2, n, result);

  return result;
};

function getSolutions(current, begin, n, result) {
  // when target is not integer
  if (parseInt(n, 10) !== n) return;

  for (var i = begin; i <= Math.sqrt(n); i ++) {
    var target = n;
    var val = i;
    var newCurrent = current;
    while(target > val) {
      var left = target % val;
      target = target / val;

      if (left !== 0) break;
      if (target < val) break;

      newCurrent = newCurrent.slice(0).concat([i]);
      result.push(newCurrent.slice(0).concat([target]));
      getSolutions(newCurrent, i + 1, target, result);
    }
  }
}


var eq = require('assert').deepEqual;

eq(getFactors(1), []);
eq(getFactors(3), []);
eq(getFactors(32), [
  [ 2, 16  ],
  [ 2, 4, 4  ],
  [ 2, 2, 8  ],
  [ 2, 2, 2, 4  ],
  [ 2, 2, 2, 2, 2  ],
  [ 4, 8  ],
]);
