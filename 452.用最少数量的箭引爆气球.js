/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length < 2) return points.length
  points.sort((a, b) => a[1] - b[1])
  let count = 1
  let end = points[0][1]
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > end) {
      count++
      end = points[i][1]
    }
  }
  return count
};
// @lc code=end

