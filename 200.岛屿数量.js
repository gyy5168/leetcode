/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const row = grid.length
  const col = grid[0].length
  let res = 0
  const turnZero = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') return
    grid[i][j] = '0'
    turnZero(i - 1, j)
    turnZero(i, j - 1)
    turnZero(i + 1, j)
    turnZero(i, j + 1)
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        res++
        turnZero(i, j)
      }
    }
  }
  return res
};
// @lc code=end

