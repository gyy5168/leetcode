/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let right = weights.reduce((a, b) => a + b, 0)
  let left = Math.max(...weights)
  
  const getTime = function(capacity) {
    let times = 1

    let count = 0
    let index = 0
    while(index < weights.length) {
      if (count+weights[index] <= capacity) {
        count+=weights[index]
        index++
      } else {
        count = 0
        times += 1
      }
    }
    return times
  }

  while(left < right) {
    let mid = ((left + right) / 2) <<0
    if (getTime(mid) <= D) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

