/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const row = board.length
  const col = board[0].length
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === '.') continue
      if (i > 0 && board[i - 1][j] === 'X') continue
      if (j > 0 && board[i][j - 1] === 'X') continue
      res++
    }
  }
  return res
};
// @lc code=end

