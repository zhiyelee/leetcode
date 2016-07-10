/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low = 1;
        var high = n;

        var mid;
        while(low < high) {
            mid = low + ((high -low) >> 1);
            if (isBadVersion(mid)) {
               high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    };
};
