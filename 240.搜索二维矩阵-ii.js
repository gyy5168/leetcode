/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var row = matrix.length - 1
  var col = 0

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] > target) {
      row--
    } else {
      col++
    }
  }
  return false
};
// @lc code=end

