/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if (!citations.length) return 0;
  citations = citations.sort(function (a, b) {
    return b - a;
  });

  var pre = citations[0];
  var h = Math.min(pre, 1);
  # dummy node at the end
  citations.push(-1);

  for (var i = 1; i < citations.length; i++) {
    var val = citations[i];

    if (pre >= i) {
      h = i;
    }
    pre = val;
  }

  return h;
};

var eq = require('assert').equal;

eq(hIndex([]), 0);
eq(hIndex([0]), 0);
eq(hIndex([2, 2, 2]), 2);
eq(hIndex([3, 0, 6, 1, 5]), 3);
eq(hIndex([5, 4, 6, 1, 5]), 4);
eq(hIndex([5, 6]), 2);

