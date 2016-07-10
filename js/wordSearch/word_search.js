'use strict';
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  board = board.map(function (item) {
    return item[0].split('');
  });

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (isMatch(board, j, i, word, 0)) return true;
    }
  }

  return false;
};

function isMatch(b, i, j, word, idx) {
  var mX = b[0].length;
  var mY = b.length;
  if (idx === word.length) return true;

  if (i < 0 || i >= mX || j < 0 || j >= mY || b[j][i] !== word.charAt(idx)) return false;

  b[j][i] = '&';

  if (isMatch(b, i + 1, j, word, idx + 1) ||
      isMatch(b, i - 1, j, word, idx + 1) ||
      isMatch(b, i, j + 1, word, idx + 1) ||
      isMatch(b, i, j - 1, word, idx + 1)) {
    return true;
  }

  b[j][i] = word.charAt(idx);
  return false;
}


var eq = require('assert').equal;

var b = [
  ["ABCE"],
  ["SFCS"],
  ["ADEE"]
];

eq(exist(b, 'ABCCED'), true);
eq(exist(b, 'SEE'), true);
eq(exist(b, 'SEEA'), false);

b = [ ['aa'] ];
eq(exist(b, 'aa'), true);
