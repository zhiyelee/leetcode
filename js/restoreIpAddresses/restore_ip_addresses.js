/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var res = [];

};

function validItem(str) {
   if (str.length > 1 && str.charAt(0) === '0') return false;
   if (parseInt(str, 10) > 255) return false;

   return true;
}

