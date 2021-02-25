/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let right = Math.max(...piles)
  let left = 1
  
  const getTime = function(speed) {
    let times = 0

    for (const pile of piles) {
      times += Math.ceil(pile/speed)
    }
    return times
  }

  while(left < right) {
    let mid = ((left + right) / 2) <<0
    if (getTime(mid) <= H) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

