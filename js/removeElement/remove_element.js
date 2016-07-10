/**
 * @param {number[]} A
 * @param {number} elem
 * @returns {number}
 */
var removeElement = function(A, elem) {
    var i;
    for (i = 0; i < A.length; ) {
        if (A[i] === elem) {
            A.splice(i, 1);
        } else {
            i ++;
        }
    }

    return A.length;
};
