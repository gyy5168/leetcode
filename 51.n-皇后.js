/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let board = new Array(n).fill('.').map(() => new Array(n).fill('.'))
  let res = []
  
  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'Q') {
          if (j === col || i + j === row + col || i - j === row - col) return false
        }
      }
    }
    return true
  }

  const backtrack = (row) => {
    if (row === n) {
      res.push(board.map(item => item.join('')))
      return
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(row, i)) continue

      board[row][i] = 'Q'
      backtrack(row + 1)
      board[row][i] = '.'
    }
  }

  backtrack(0)

  return res
};
// @lc code=end

