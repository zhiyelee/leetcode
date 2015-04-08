/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

    if (A.length <= 1) return A;

    var pre;
    for (var i = 0; i < A.length;) {
        if (pre === A[i]) {
            A.splice(i, 1);
        } else {
            pre = A[i];
            i ++;
        }
    }
};

var t = [1,2,3,4,4,5,5,5,6];
removeDuplicates(t);
console.log(t)
