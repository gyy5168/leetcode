/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // var res = []
  // while(intervals.length) {
  //   var interval = intervals.shift()
  //   var merged = false
  //   for (let i = 0; i < intervals.length; i++) {
  //     var item = intervals[i]
  //     if ((interval[1] >= item[0] && interval[0] <= item[1]) || (item[1] >= interval[0] && item[0] <= interval[1])) {
  //       var cache = [Math.min(interval[0], item[0]), Math.max(interval[1], item[1])]
  //       intervals.splice(i, 1)
  //       intervals.unshift(cache)
  //       merged = true
  //       break
  //     }
  //   }
  //   if (!merged) res.push(interval)
  // }
  // return res
  if (intervals.length === 0) return []
  var res = []
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i])
    } else {
      if (intervals[i][1] > res[res.length - 1][1]) res[res.length - 1][1] = intervals[i][1]
    }
  }
  return res
};
// @lc code=end

