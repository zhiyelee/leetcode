/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  // check all rows and columns along diagonal line, board[0][0], board[1][1], .., board[8][8]
  for (let i = 0; i < 9; i ++) {
    const isRowValid = isRowOrColumnValid(board, i);
    if (!isRowValid) return false;
    const isColumnValid = isRowOrColumnValid(board, i, true);
    if (!isColumnValid) return false;
  }

  // check boxes
  for (let i = 0; i < 3; i ++) {
      const rowStart = i * 3;
    for (let j = 0; j < 3; j ++) {
      const columnStart = j * 3;
      const isValid = isBoxValid(board, rowStart, columnStart)
      if (!isValid) return false;
    }
  }

  return true;
};

function isRowOrColumnValid(board, index, isColumn) {
  const valueSet = new Set();
  for (let i = 0; i < board.length; i ++) {
    let value = isColumn ? board[i][index] : board[index][i];
    if (valueSet.has(value)) return false;
    if (value !== '.') {
      valueSet.add(value);
    }
  }

  return true;
}

function isBoxValid(board, rowStart, columnStart) {
  const valueSet = new Set();
  for (let i = rowStart; i < rowStart + 3; i ++) {
    for (let j = columnStart; j < columnStart + 3; j ++) {
      const value = board[i][j];
      if (valueSet.has(value)) return false;
      if (value !== '.') {
        valueSet.add(value);
      }
    }
  }
  return true;
}

const eq = require('assert').strictEqual;
eq(isValidSudoku(
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
  ]), true);

eq(isValidSudoku(
  [["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
  ]), false);

eq(isValidSudoku(
  [[".",".","4",".",".",".","6","3","."]
  ,[".",".",".",".",".",".",".",".","."]
  ,["5",".",".",".",".",".",".","9","."]
  ,[".",".",".","5","6",".",".",".","."]
  ,["4",".","3",".",".",".",".",".","1"]
  ,[".",".",".","7",".",".",".",".","."]
  ,[".",".",".","5",".",".",".",".","."]
  ,[".",".",".",".",".",".",".",".","."]
  ,[".",".",".",".",".",".",".",".","."]]
), false);

eq(isValidSudoku(
  [[".",".",".",".","5",".",".","1","."]
  ,[".","4",".","3",".",".",".",".","."]
  ,[".",".",".",".",".","3",".",".","1"]
  ,["8",".",".",".",".",".",".","2","."]
  ,[".",".","2",".","7",".",".",".","."]
  ,[".","1","5",".",".",".",".",".","."]
  ,[".",".",".",".",".","2",".",".","."]
  ,[".","2",".","9",".",".",".",".","."]
  ,[".",".","4",".",".",".",".",".","."]]
), false)
