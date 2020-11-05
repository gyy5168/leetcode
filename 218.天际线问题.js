/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  if (buildings.length === 0) return []
  const res = [buildings[0][0], buildings[0][2]]

  res.push(right[right.length - 1], 0)
};
// @lc code=end
