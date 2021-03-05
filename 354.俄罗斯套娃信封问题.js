/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (!envelopes.length) return 0
  envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })
  let lengthOfLIS = function () {
    // let dp = new Array(envelopes.length).fill(1)
    // for (let i = 0; i < envelopes.length; i++) {
    //   for (let j = 0; j < i; j++) {
    //     if (envelopes[i][1] > envelopes[j][1]) {
    //       dp[i] = Math.max(dp[i], dp[j] + 1)
    //     }
    //   }
    // }
    // return Math.max(...dp)
    let piles = 0, n = envelopes.length
    let top = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      let poker = envelopes[i][1];
      let left = 0
      let right = piles
      while (left < right) {
        let mid = (left + right) >> 1
        if (top[mid] >= poker) right = mid
        else left = mid + 1
      }
      if (left === piles) piles++
      // 把这张牌放到牌堆顶
      top[left] = poker
    }
    return piles
  }
  return lengthOfLIS()
};
// @lc code=end

