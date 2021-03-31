/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  // const len = bookings.length
  // const res = new Array(n).fill(0)
  // for (let i = 0; i < len; i++) {
  //   const [start, end, val] = bookings[i]
  //   for (let j = start - 1; j <= end - 1; j++) {
  //     res[j] += val
  //   }
  // }
  // return res

  const diffs = new Array(n).fill(0)
  const len = bookings.length

  for (let i = 0; i < len; i++) {
    const [start, end, val] = bookings[i]
    
    diffs[start - 1] += val
    if (end < n) diffs[end] -= val
  }

  const res = []
  res[0] = diffs[0]

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] + diffs[i]
  }

  return res
};
// @lc code=end

