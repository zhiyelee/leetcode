/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(words) {
  // here you are!   ==> are! you here
  // ['h', 'e', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'a', 'r', 'e', '!']
  words.unshift(' ');
  var len = words.length;
  var current = 0;
  var count = 0;
  var word;

  for (var i = len - 1; i >= 0; i--) {
    var val = words[len - 1 - count];

    if (val === ' ') {
      if (count !== 0) {
        word = words.splice(-count, count);
        [].splice.apply(words, [current, 0].concat(word));
      }
      // current move forward
      current = current + count;
      words.splice(-1, 1);
      words.splice(current, 0, ' ');
      count = 0;
      current ++;
    } else {
      count ++;
    }
  }

  words.splice(-1, 1);
};


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

