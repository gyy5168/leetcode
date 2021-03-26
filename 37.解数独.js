/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const isValid = (row, col, char) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === char) return false
      if (board[i][col] === char) return false
      
      if (board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === char) return false
    }
    return true
  }

  const backtrack = (row, col) => {
    if (row === 9) return true
    if (col === 9) {
      return backtrack(row + 1, 0)
    }

    if (board[row][col] !== '.') {
      return backtrack(row, col + 1)
    }

    for (let i = 1; i <= 9; i++) {
      const char = i.toString()

      if (!isValid(row, col, char)) continue

      board[row][col] = char
      if (backtrack(row, col + 1)) return true
      board[row][col] = '.'
    }
    return false
  }

  backtrack(0, 0)

  return board
};
// @lc code=end

