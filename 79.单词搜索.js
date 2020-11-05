/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length || !word.length) return false
  var row = board.length
  var col = board[0].length
  var dfs = function (i, j , curr) {
    if (i < 0 || j < 0 || i >= row || j >= col) return false
    if (board[i][j] !== word[curr]) return false
    if (curr === word.length - 1) return true
    var temp = board[i][j]
    board[i][j] = null
    var res = dfs(i - 1, j, curr +  1) || dfs(i, j + 1, curr +  1) || dfs(i + 1, j, curr +  1) || dfs(i, j - 1, curr +  1)
    board[i][j] = temp
    return res
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, 0)) return true
    }
  }
  return false
};
// @lc code=end

