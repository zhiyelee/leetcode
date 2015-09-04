/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

    if (A.length <= 1) return A.length;

    var pre;
    for (var i = 0; i < A.length;) {
        if (pre === A[i]) {
            A.splice(i, 1);
        } else {
            pre = A[i];
            i ++;
        }
    }

    return A.length;
};

var eq = require('assert').equal;

var t = [1,2,3,4,4,5,5,5,6];
eq(removeDuplicates(t), 6);
eq(removeDuplicates([]), 0);
eq(removeDuplicates([1,1,1,1]), 1);
