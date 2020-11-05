/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < m; k++) {
          if (matrix[k][j] !==0) matrix[k][j] = true
        }
        for (let k = 0; k < n; k++) {
          if (matrix[i][k] !==0) matrix[i][k] = true
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === true) {
        matrix[i][j] = 0
      }
    }
  }
};
// @lc code=end

