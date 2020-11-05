/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // if (!matrix.length) return []
  // var arr = []
  // var m = matrix.length
  // var n = matrix[0].length
  // var i = 0
  // var row = 0
  // var col = 0
  // var direct = 'right'
  // while (i < m / 2) {
  //   arr.push(matrix[row][col])
  //   switch (direct) {
  //     case 'right':
  //       if (col < n - 1 - i) {
  //         col++
  //       } else if (row < m - 1 - i) {
  //         direct = 'down'
  //         row++
  //       } else {
  //         return arr
  //       }
  //       break
  //     case 'down':
  //       if (row < m - 1 - i) {
  //         row++
  //       } else if (col > i) {
  //         col--
  //         direct = 'left'
  //       } else {
  //         return arr
  //       }
  //       break
  //     case 'left':
  //       if (col > i) {
  //         col--
  //       } else if (row > i + 1) {
  //         row--
  //         direct = 'up'
  //       } else {
  //         return arr
  //       }
  //       break
  //     case 'up':
  //       if (row > i + 1) {
  //         row--
  //       } else if (col < n - 2 - i) {
  //         i++
  //         col++
  //         direct = 'right'
  //       } else {
  //         return arr
  //       }
  //       break
  //     default:
  //       break
  //   }
  // }
  // return arr
  if (!matrix.length) return []
  var res = []
  var m = matrix.length
  var n = matrix[0].length
  var len = matrix.length * matrix[0].length
  var row = 0
  var col = 0
  while (res.length < len) {
    for (let i = col; i <= n - 1; i++) {
      res.push(matrix[row][i]) 
    }
    for (let i = row + 1; i <= m - 1; i++) {
      res.push(matrix[i][n - 1]) 
    }
    if (res.length >= len) break
    for (let i = n - 2; i > col; i--) {
      res.push(matrix[m - 1][i]) 
    }
    for (let i = m - 1; i > row; i--) {
      res.push(matrix[i][col])
    }
    row++
    col++
    m--
    n--
  }
  return res
};
// @lc code=end

