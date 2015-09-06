/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  var len = citations.length;

  citations.unshift(0);
  var low = 0;
  var high = len;
  var mid;
  var max = 0;
  while (low <= high) {
    mid = (low + high) >> 1;

    // numbers count >= citations[mid]
    var largetLeft = len - mid + 1;
    if (citations[mid] >= largetLeft) {
      max = Math.max(max, largetLeft);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return max;
};

var eq = require('assert').equal;

eq(hIndex([]), 0);
eq(hIndex([0]), 0);
eq(hIndex([2, 2, 2]), 2);
eq(hIndex([0, 1, 3, 5, 6]), 3);
eq(hIndex([1, 4, 5, 5, 6]), 4);
