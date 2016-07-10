
/**
 * @param {string} s
 * @return {string}
 * @example
 *  Given s = "hello", return "holle".
 *  Given s = "leetcode", return "leotcede".
 */
var reverseVowels = function(s) {
  var list = s.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var isVowel = function(c) { return vowels.indexOf(c.toLowerCase()) !== -1; }

  var start = 0;
  var end = list.length - 1;
  var isStartValid = false;
  var isEndValid = false;

  while(start < end) {
    if (!isVowel(list[start])) {
      start ++;
    } else {
      isStartValid = true;
    }

    if (!isVowel(list[end])) {
       end --;
    } else {
       isEndValid = true;
    }

    // swap element and reset flags
    if (isStartValid && isEndValid) {
      var tmp = list[start];
      list[start] = list[end];
      list[end] = tmp;

      start ++;
      isStartValid =  false;
      end --;
      isEndValid = false;
    }
  }

  return list.join('');
};


var eq = require('assert').equal;

eq(reverseVowels('leetcode'), 'leotcede')
eq(reverseVowels('lttt'), 'lttt')
eq(reverseVowels('eoot'), 'ooet')
eq(reverseVowels('Aot'), 'oAt')

