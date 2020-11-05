/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var len = matrix.length
  for (let i = 0; i < len/2; i++) {
    for (let j = 0; j < (len - 1)/2; j++) {
      // let cache = {
      //   x: i,
      //   y: j
      // }
      // let curr = {
      //   x: i,
      //   y: j
      // }
      // let next = {
      //   x: curr.y,
      //   y: len - curr.x
      // }
      // let cacheCurr = matrix[curr.x][curr.y]
      // while (next.x !== cache.x || next.y !== cache.y) {
      //   let cacheNext = matrix[next.x][next.y]
      //   cacheNext = matrix[next.x][next.y]
      //   matrix[next.x][next.y] = cacheCurr
      //   cacheCurr = cacheNext
      //   curr = next
      //   next = {
      //     x: curr.y,
      //     y: len - curr.x
      //   }
      // }
      // matrix[next.x][next.y] = cacheCurr
      // var cache = []
      // var x = i
      // var y = j
      // for (let i = 0; i < 4; i++) {
      //   cache.push(matrix[x][y])
      //   var cacheX = x
      //   x = y
      //   y = len - 1 - cacheX
      // }
      // for (let i = 0; i < 4; i++) {
      //   matrix[x][y] = cache[(i + 3) % 4]
      //   var cacheX = x
      //   x = y
      //   y = len - 1 - cacheX
      // }
      var temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - j][i]
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j]
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i]
      matrix[j][len - 1 - i] = temp
    }
  }
};
// @lc code=end

