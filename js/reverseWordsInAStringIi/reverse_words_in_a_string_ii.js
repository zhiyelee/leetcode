/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */

/**
 * a much simple version
 **/
var reverseWords = function(words) {
  words = words.reverse();

  var start = 0;
  var val;
  for (var i = 0; i < words.length; i ++) {
    val = words[i];
    if (val === ' ') {
      reverseWord(words, start, i - 1);
      start = i + 1;
    }
  }
  reverseWord(words, start, i - 1);
}

function reverseWord(arr, start, end) {
  if (start >= end || end >= arr.length) return;

  while (start < end) {
    tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start ++;
    end --;
  }
}

var eq = require('assert').deepEqual;
var words;

words = 'here you are haah'.split('');
reverseWords(words);
eq(words, 'haah are you here'.split(''));

words = 'here you are haah!'.split('');
reverseWords(words);
eq(words, 'haah! are you here'.split(''));

words = 'here ! %%%'.split('');
reverseWords(words);
eq(words, '%%% ! here'.split(''));

