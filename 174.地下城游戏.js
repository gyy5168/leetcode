/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const row = dungeon.length
  const col = dungeon[0].length
  let res = new Array(row + 1).fill([]).map(() => new Array(col + 1).fill(Infinity))
  res[row][col - 1] = 1
  res[row - 1][col] = 1
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      const minHP = Math.min(res[i + 1][j] - dungeon[i][j], res[i][j + 1] - dungeon[i][j])
      res[i][j] = Math.max(minHP, 1)
    } 
  }
  return res[0][0]
};
// @lc code=end

