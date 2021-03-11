/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0
  let res = 0
  intervals.sort((a, b) => a[1] - b[1])
  let index = 1
  let tmp = intervals[0][1]
  while(index < intervals.length) {
    if (intervals[index][0] < tmp) {
      res++
    } else {
      tmp = intervals[index][1]
    }
    index++
  }
  return res
};
// @lc code=end

